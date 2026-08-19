import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = path.join(projectRoot, 'dist');
const failures = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else files.push(fullPath);
  }
  return files;
}

async function exists(filePath) {
  try { await access(filePath); return true; } catch { return false; }
}

function countMatches(text, pattern) {
  return [...text.matchAll(pattern)].length;
}

function localTarget(fromFile, rawValue) {
  const clean = rawValue.split('#')[0].split('?')[0];
  if (!clean || /^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(clean)) return null;
  const decoded = decodeURIComponent(clean);
  let target = decoded.startsWith('/')
    ? path.join(distRoot, decoded.slice(1))
    : path.resolve(path.dirname(fromFile), decoded);
  if (decoded.endsWith('/')) target = path.join(target, 'index.html');
  else if (!path.extname(target)) target = path.join(target, 'index.html');
  return target;
}

const allFiles = await walk(distRoot);
const htmlFiles = allFiles.filter((file) => file.endsWith('.html'));

for (const file of htmlFiles) {
  const relative = path.relative(distRoot, file).replaceAll(path.sep, '/');
  const html = await readFile(file, 'utf8');
  if (!/<html\b[^>]*lang="ko"/i.test(html)) failures.push(`${relative}: html lang="ko"가 없습니다.`);
  if (countMatches(html, /<title\b[^>]*>.*?<\/title>/gis) !== 1) failures.push(`${relative}: title은 정확히 1개여야 합니다.`);
  if (countMatches(html, /<meta\b[^>]*name="description"[^>]*>/gi) !== 1) failures.push(`${relative}: 설명 메타 태그는 정확히 1개여야 합니다.`);
  if (countMatches(html, /<link\b[^>]*rel="canonical"[^>]*>/gi) !== 1) failures.push(`${relative}: canonical은 정확히 1개여야 합니다.`);
  if (countMatches(html, /<h1\b/gi) !== 1) failures.push(`${relative}: h1은 정확히 1개여야 합니다.`);
  if (/\b(?:undefined|NaN)\b/.test(html)) failures.push(`${relative}: 잘못 생성된 값(undefined 또는 NaN)이 있습니다.`);

  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/gi)) {
    const target = localTarget(file, match[1]);
    if (!target) continue;
    if (!target.startsWith(distRoot) || !(await exists(target))) {
      failures.push(`${relative}: 연결 파일을 찾을 수 없습니다 — ${match[1]}`);
    }
  }

  for (const match of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try { JSON.parse(match[1]); } catch { failures.push(`${relative}: 구조화 데이터 JSON이 올바르지 않습니다.`); }
  }
}

const calculatorPages = htmlFiles.filter((file) => /^calculators\/[^/]+\/index\.html$/.test(path.relative(distRoot, file).replaceAll(path.sep, '/')));
if (calculatorPages.length !== 12) failures.push(`공개 계산기 페이지가 12개가 아닙니다. 현재 ${calculatorPages.length}개입니다.`);

for (const required of ['robots.txt', 'sitemap-index.xml', 'sitemap-0.xml', 'site.webmanifest', '404.html']) {
  if (!(await exists(path.join(distRoot, required)))) failures.push(`필수 결과물 ${required}이 없습니다.`);
}

if (failures.length > 0) {
  console.error(`빌드 결과 검사 실패 (${failures.length}건)`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`빌드 결과 검사 통과: HTML ${htmlFiles.length}개, 공개 계산기 ${calculatorPages.length}개, 내부 링크·SEO 기본 항목 정상`);
