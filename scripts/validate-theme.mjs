import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const scenesDir = join(root, 'public', 'images', 'scenes');
const backgroundsDir = join(root, 'public', 'images', 'backgrounds');
const builtBackgroundsDir = join(root, 'dist', 'images', 'backgrounds');
const calculatorDist = join(root, 'dist', 'calculators');
const homeHtml = join(root, 'dist', 'index.html');
const globalCss = join(root, 'src', 'styles', 'global.css');
const infoPageNames = ['about', 'contact', 'privacy', 'terms'];
const contactEmail = 'steadygo0531@gmail.com';

const fail = (message) => {
  console.error(`테마 검사 실패: ${message}`);
  process.exit(1);
};

if (!existsSync(scenesDir)) fail('public/images/scenes 폴더가 없습니다.');
if (!existsSync(backgroundsDir)) fail('public/images/backgrounds 폴더가 없습니다.');
if (!existsSync(calculatorDist)) fail('dist/calculators 빌드 결과가 없습니다. 먼저 npm run build를 실행하세요.');

const worldBackgrounds = ['solsol-world-day.webp', 'solsol-world-night.webp'];
const css = readFileSync(globalCss, 'utf8');
for (const image of worldBackgrounds) {
  if (!existsSync(join(backgroundsDir, image))) fail(`${image} 원본이 없습니다.`);
  if (!existsSync(join(builtBackgroundsDir, image))) fail(`${image}가 dist에 복사되지 않았습니다.`);
  if (!css.includes(image)) fail(`global.css에 ${image}가 연결되지 않았습니다.`);
}

const scenes = readdirSync(scenesDir).filter((name) => name.endsWith('.webp'));
if (scenes.length !== 12) fail(`계산기 장면은 12개여야 하지만 ${scenes.length}개입니다.`);

const calculatorPages = readdirSync(calculatorDist, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => join(calculatorDist, entry.name, 'index.html'));

if (calculatorPages.length !== 12) fail(`계산기 페이지는 12개여야 하지만 ${calculatorPages.length}개입니다.`);

for (const page of calculatorPages) {
  const html = readFileSync(page, 'utf8');
  if (!html.includes('/images/scenes/')) fail(`${page}에 캐릭터 장면이 연결되지 않았습니다.`);
  if (!html.includes('calculator-stage')) fail(`${page}에 판타지 계산 화면이 없습니다.`);
  if (!html.includes('page-calculator page-world')) fail(`${page}에 전체 화면 배경 클래스가 없습니다.`);
  if (!html.includes('<form')) fail(`${page}에 계산 입력 폼이 없습니다.`);
}

const home = readFileSync(homeHtml, 'utf8');
if (!home.includes('page-home page-world')) fail('홈에 전체 화면 배경 클래스가 없습니다.');
if (!home.includes('solsol-world-day.webp')) fail('홈의 공유 이미지가 새 낮 배경을 사용하지 않습니다.');

for (const name of infoPageNames) {
  const page = join(root, 'dist', name, 'index.html');
  if (!existsSync(page)) fail(`${name} 정보 페이지 빌드 결과가 없습니다.`);
  const html = readFileSync(page, 'utf8');
  if (!html.includes('page-info page-world')) fail(`${name} 정보 페이지에 전체 화면 배경 클래스가 없습니다.`);
  if (!html.includes('content-card')) fail(`${name} 정보 페이지에 가독성 카드가 없습니다.`);
}

for (const name of ['contact', 'privacy']) {
  const html = readFileSync(join(root, 'dist', name, 'index.html'), 'utf8');
  if (!html.includes(contactEmail)) fail(`${name} 페이지의 운영 이메일이 ${contactEmail}이 아닙니다.`);
  if (html.includes('contact@solsolplay.com')) fail(`${name} 페이지에 이전 운영 이메일이 남아 있습니다.`);
}

console.log('테마 검사 통과: 낮·밤 배경(홈·계산기·정보 4페이지), 계산기 장면 12개, 입력 폼 12개, 운영 이메일 정상');
