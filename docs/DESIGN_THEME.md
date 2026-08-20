# 솔솔계산소 디자인·테마 관리표

## 이번 완성본에서 바뀐 곳

- 홈: 첫 화면에서 마지막 안내 카드까지 밝은 계산 정원 또는 별빛 계산소 배경이 끊기지 않고 이어집니다.
- 상단: 초안처럼 짙은 남색 메뉴, `낮/밤` 전환 버튼, 청록색 검색 버튼을 사용합니다.
- 계산기 12개: 화면 전체에는 같은 솔솔 월드 낮·밤 배경, 왼쪽에는 각 계산기의 캐릭터 이야기 장면, 오른쪽에는 실제 입력·결과가 표시됩니다.
- 계산기 카드: 단순 이모지 대신 각 장면의 작은 미리보기를 보여줍니다.
- 모바일: 장면이 먼저 나오고 입력·결과가 아래에 한 줄로 이어집니다.

## 화면 전체 낮·밤 배경

- 낮: `public/images/backgrounds/solsol-world-day.webp`
- 밤: `public/images/backgrounds/solsol-world-night.webp`
- 연결 위치: `src/styles/global.css`의 `.page-world .site-main`
- 적용 페이지: 홈과 `/calculators/` 아래 모든 계산기 주소

배경은 스크롤 중에도 화면을 가득 채우며, 실제 제목·입력창·버튼·결과는 반투명 카드 위의 HTML로 유지됩니다. 따라서 배경 속 작은 그림이 계산 기능이나 한글을 대신하지 않습니다.

## 계산기와 그림 파일 연결

| 계산기 | 그림 파일 |
|---|---|
| 나이 | `reference-age.webp` |
| 배당금 | `dividend.webp` |
| 로또 | `reference-lotto-prize.webp` |
| 대출 | `reference-loan-interest.webp` |
| BMI | `reference-bmi.webp` |
| 날짜 차이 | `reference-date-difference.webp` |
| 퍼센트 | `percentage.webp` |
| 할인 | `discount.webp` |
| 복리 | `compound-interest.webp` |
| 적금 | `savings.webp` |
| D-day | `d-day.webp` |
| 단위 변환 | `unit-converter.webp` |

모든 파일은 `public/images/scenes`에 있습니다. 실제 연결 정보와 대체 설명은 `src/data/calculators.ts`에 있습니다.

## 그림 하나를 나중에 교체하는 방법

1. 새 그림을 가로형 `WebP`로 준비합니다. 권장 크기는 `1536×1024`입니다.
2. VS Code 왼쪽에서 `public > images > scenes`를 엽니다.
3. 바꿀 파일과 **똑같은 이름**으로 새 파일을 덮어씁니다. 이름이 같으면 코드는 고칠 필요가 없습니다.
4. VS Code 터미널에서 `npm.cmd run check`를 실행합니다.
5. `npm.cmd run dev`를 실행하고 PC·휴대폰 크기에서 장면의 얼굴과 소품이 잘 보이는지 확인합니다.
6. 문제가 없으면 Git에 저장하고 main으로 보내 Cloudflare 자동배포를 실행합니다.

새 파일명을 쓰고 싶다면 `src/data/calculators.ts`에서 해당 계산기의 `scene` 값도 함께 고칩니다. 초안 화면 전체를 그대로 배경으로 쓰지 말고, 장면은 그림으로 사용하며 입력창·버튼·결과는 실제 HTML로 유지해야 휴대폰·검색·접근성·계산 기능이 정상입니다.

## 낮·밤 전체 배경 교체

- 낮: `public/images/backgrounds/solsol-world-day.webp`
- 밤: `public/images/backgrounds/solsol-world-night.webp`

같은 이름으로 교체하면 코드를 고치지 않아도 됩니다. 권장 비율은 `16:9`, 권장 크기는 `1672×941` 이상이며 글자·버튼·로고를 이미지 안에 넣지 않습니다.
