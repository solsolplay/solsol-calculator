# 64단계 적용 안내

이 완성본에는 GA4 측정 ID `G-WPSXDCLX98`, 통계 동의 배너, 최소 이벤트 3개와 수정된 개인정보처리방침이 들어 있습니다.

## 현재 작업 폴더에 적용하기

1. 이 ZIP을 별도 폴더에 압축 해제합니다.
2. VS Code와 실행 중인 개발 서버를 잠시 닫습니다.
3. 압축 해제한 `solsol-calculator` 폴더 안의 파일과 폴더를 기존 `C:\solsol-work\solsol-calculator` 안으로 복사하고, 같은 이름 파일은 교체합니다.
4. 기존 폴더 안의 숨김 폴더 `.git`은 삭제하지 않습니다. 완성본 ZIP에는 `.git`, `node_modules`, `dist`가 들어 있지 않습니다.
5. VS Code에서 기존 `C:\solsol-work\solsol-calculator` 폴더를 다시 엽니다.
6. VS Code 상단의 `터미널 > 새 터미널`을 누릅니다.
7. 터미널 경로가 `C:\solsol-work\solsol-calculator`인지 확인합니다.
8. 아래 명령을 한 줄씩 실행합니다.

```powershell
npm.cmd install
npm.cmd run check
npm.cmd run dev
```

9. 터미널에 표시된 `http://localhost:4321`을 열어 동의 배너와 계산기를 확인합니다.
10. 확인 후 터미널에서 `Ctrl+C`를 눌러 개발 서버를 끕니다.

## GitHub와 Cloudflare에 반영하기

아래 명령을 한 줄씩 실행합니다.

```powershell
git status
git add .
git commit -m "feat: add privacy-safe GA4 analytics"
git pull --rebase origin main
git push origin main
```

`git pull --rebase origin main`에서 충돌이 나오면 임의로 계속 진행하지 말고 충돌 화면을 먼저 확인합니다. `main` push가 성공하면 기존 Cloudflare 자동 배포가 시작됩니다.

## 배포 후 필수 확인

1. 시크릿 창에서 `https://solsolplay.com`을 엽니다.
2. `거부`를 눌러도 계산기가 정상 작동하는지 확인합니다.
3. 개인정보처리방침에서 `통계 쿠키 선택 다시 하기`를 누릅니다.
4. `통계 허용`을 누른 뒤 계산기 하나를 실행합니다.
5. GA4의 `보고서 > 실시간`에서 방문과 `calculation_complete` 이벤트를 확인합니다.
6. GA4 관리 화면에서 이벤트 데이터 보관 기간을 `2개월`로 유지합니다.

GA4 반영에는 몇 분이 걸릴 수 있습니다. 측정 ID는 공개용 식별자이므로 웹 소스에 보이는 것이 정상입니다.
