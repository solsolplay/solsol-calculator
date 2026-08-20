# 오둥이님, 여기부터 시작하세요

이 완성본에는 솔솔계산소 홈, 화면 전체에 이어지는 낮·밤 12지신 배경, **계산기마다 다른 캐릭터 장면 12개**, 서로 다른 주소를 가진 계산기 12개, 카테고리 4개, 소개·문의·개인정보·약관·404, 사이트맵·검색 노출 기본 설정, 자동검사와 Cloudflare Workers 설정이 들어 있습니다.

## 1. 기존 폴더를 먼저 보관합니다

현재 `C:\solsol-work\solsol-calculator` 폴더 이름을 `solsol-calculator-step22-backup`처럼 바꿔 둡니다. 백업을 확인하기 전에는 기존 폴더를 삭제하지 않습니다.

## 2. 새 ZIP을 풉니다

완성 ZIP의 압축을 풀고 나온 `solsol-calculator` 폴더를 `C:\solsol-work` 안에 둡니다.

최종 위치는 다음과 같아야 합니다.

```text
C:\solsol-work\solsol-calculator\package.json
```

## 3. VS Code로 새 폴더를 엽니다

VS Code 위쪽 메뉴에서 `파일 > 폴더 열기`를 누르고 `C:\solsol-work\solsol-calculator`를 선택합니다. 위쪽 메뉴에서 `터미널 > 새 터미널`을 누릅니다.

터미널 맨 왼쪽에 다음 경로가 보이면 맞습니다.

```text
PS C:\solsol-work\solsol-calculator>
```

## 4. 설치와 전체 검사를 합니다

PowerShell에 아래 명령을 한 줄씩 입력하고 매번 Enter를 누릅니다.

```powershell
npm.cmd ci
npm.cmd run check
```

마지막에 `빌드 결과 검사 통과`가 보이면 정상입니다.

이어서 `테마 검사 통과`까지 보이면 전체 화면 낮·밤 배경과 계산기 장면 12개도 모두 연결된 것입니다.

## 5. 내 컴퓨터에서 화면을 엽니다

```powershell
npm.cmd run dev
```

터미널의 `http://localhost:4321/`을 Ctrl+클릭합니다. 종료할 때는 터미널을 한 번 클릭하고 `Ctrl+C`를 누릅니다.

## 공개 전에 꼭 확인할 한 가지

`src/config.ts`에 적힌 `contact@solsolplay.com` 메일을 실제로 받을 수 있는지 확인하세요. 아직 만든 메일이 아니라면 본인이 받을 수 있는 주소로 바꾼 뒤 저장합니다.

GitHub·Cloudflare·가비아·Search Console·AdSense처럼 로그인이 필요한 단계는 `docs/USER_ACTIONS.md`와 `docs/DEPLOYMENT.md`에 이어서 정리해 두었습니다.

그림을 나중에 교체하는 방법은 `docs/DESIGN_THEME.md`에 표로 정리해 두었습니다.
