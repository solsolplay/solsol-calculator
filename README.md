# 솔솔계산소

생활에 필요한 계산을 친근하게 풀어주는 Astro 정적 사이트입니다. 모든 일반 계산은 사용자의 브라우저 안에서 처리되며, 12개 계산기가 각각 고유 주소를 가집니다.

홈과 모든 계산기 화면 전체에 이어지는 낮·밤 12지신 배경과 계산기마다 다른 캐릭터 이야기 장면을 사용하되, 입력창·결과·링크는 실제 HTML로 구현해 초안의 귀여움과 사이트 기능을 함께 유지합니다. 이미지 교체표는 [docs/DESIGN_THEME.md](docs/DESIGN_THEME.md), 완료·검사 결과는 [docs/COMPLETION_REPORT.md](docs/COMPLETION_REPORT.md)에 있습니다.

## 포함된 계산기

- 만 나이, 배당금, 로또 당첨금, 대출 이자, BMI, 날짜 차이
- 퍼센트, 할인율, 복리, 적금 이자, D-day, 생활 단위 변환

## Windows에서 실행

PowerShell 실행 정책 오류를 피하기 위해 이 프로젝트에서는 로컬 명령에 `.cmd`를 붙입니다.

```powershell
npm.cmd install
npm.cmd run dev
```

브라우저에서 `http://localhost:4321/`을 엽니다. 서버 종료는 `Ctrl+C`입니다.

## 검사

```powershell
npm.cmd run check
```

위 명령 하나가 Astro 형식 검사, 계산식 단위검사, 정식 빌드, 12개 주소·내부 링크·SEO 기본 검사를 차례로 실행합니다. 실제 Chrome 클릭 검사는 별도로 실행합니다.

```powershell
npm.cmd run test:e2e:desktop
```

처음 Playwright를 설치한 컴퓨터에서는 다음 명령을 먼저 한 번 실행합니다.

```powershell
npx.cmd playwright install chromium
```

## Cloudflare 수동 배포

```powershell
npx.cmd wrangler login
npm.cmd run build
npx.cmd wrangler deploy
```

외부 계정 연결 전에 [docs/USER_ACTIONS.md](docs/USER_ACTIONS.md)와 [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md)를 확인하세요.

## 직접 고치지 않는 폴더

`node_modules`, `.astro`, `dist`는 설치·빌드할 때 자동으로 만들어집니다. 직접 편집하지 않습니다.
