import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const scenesDir = join(root, 'public', 'images', 'scenes');
const calculatorDist = join(root, 'dist', 'calculators');
const homeHtml = join(root, 'dist', 'index.html');

const fail = (message) => {
  console.error(`테마 검사 실패: ${message}`);
  process.exit(1);
};

if (!existsSync(scenesDir)) fail('public/images/scenes 폴더가 없습니다.');
if (!existsSync(calculatorDist)) fail('dist/calculators 빌드 결과가 없습니다. 먼저 npm run build를 실행하세요.');

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
  if (!html.includes('<form')) fail(`${page}에 계산 입력 폼이 없습니다.`);
}

const home = readFileSync(homeHtml, 'utf8');
for (const image of ['solsol-zodiac-day.webp', 'solsol-zodiac-night.webp']) {
  if (!home.includes(image)) fail(`홈에 ${image}가 연결되지 않았습니다.`);
}

console.log('테마 검사 통과: 홈 낮·밤 대표 그림, 계산기 장면 12개, 입력 폼 12개 정상');
