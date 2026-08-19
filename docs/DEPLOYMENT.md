# GitHub·Cloudflare·도메인 연결 절차

## 1. GitHub 백업

GitHub에서 `solsol-calculator`라는 빈 Private 저장소를 만들고 README·라이선스·.gitignore 자동 생성을 선택하지 않습니다. 그 뒤 Windows VS Code 터미널에서 다음을 실행합니다.

```powershell
git status
git add .
git commit -m "feat: build solsol calculator portal"
git branch -M main
git remote add origin https://github.com/사용자이름/solsol-calculator.git
git push -u origin main
```

`사용자이름`은 실제 GitHub 아이디로 바꿉니다. 비밀번호·API 키·`.env`가 보이면 push하지 않습니다.

## 2. workers.dev 첫 배포

가비아 네임서버를 아직 바꾸지 않은 상태에서 실행합니다.

```powershell
npx.cmd wrangler login
npm.cmd run build
npx.cmd wrangler deploy
```

브라우저에서 Cloudflare 허용을 누르고, 터미널에 표시되는 `workers.dev` 주소에서 홈·12개 계산기·정책·404를 확인합니다.

## 3. 자동배포

Cloudflare의 Workers & Pages에서 저장소 가져오기를 선택합니다.

- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Cloudflare 웹 입력칸에는 `.cmd`를 붙이지 않습니다.

## 4. 가비아 도메인 연결

1. Cloudflare에서 `solsolplay.com`을 추가하고 Free 플랜을 선택합니다.
2. Cloudflare가 알려주는 네임서버 두 개를 복사합니다.
3. 가비아 `My가비아 > 서비스 관리 > 도메인 관리 > 네임서버 변경`에서 1차·2차에 입력합니다.
4. Cloudflare 상태가 Active가 된 뒤 Worker의 `Settings > Domains & Routes > Custom Domain`에서 `solsolplay.com`을 추가합니다.
5. `www`를 사용할 경우 대표 주소 한 곳으로 리디렉션합니다.

## 5. 되돌리기

Cloudflare 배포 목록에서 직전 성공 배포를 확인하고, GitHub에서는 직전 정상 commit을 기준으로 새 복구 commit을 만듭니다. 강제로 기록을 지우는 `git reset --hard`는 사용하지 않습니다.

