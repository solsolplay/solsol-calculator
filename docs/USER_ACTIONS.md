# 오둥이님이 확인하거나 직접 해야 하는 항목

## 지금 확인할 것

1. `src/config.ts`의 운영 이메일이 `steadygo0531@gmail.com`인지 확인합니다.
2. 나중에 받을 주소가 바뀌면 `contactEmail` 값만 새 주소로 바꿉니다.
3. 낮·밤 대표 이미지와 전체 문구가 원하는 분위기인지 확인합니다.
4. 새 완성본을 연 뒤 `npm.cmd ci`와 `npm.cmd run check`를 실행합니다.
5. `npx.cmd playwright install chromium`을 한 번 실행한 뒤 `npm.cmd run test:e2e:desktop`으로 실제 Chrome 클릭 검사를 합니다.

## 공개할 때 필요한 계정 작업

1. GitHub에서 비공개 `solsol-calculator` 저장소 만들기
2. Cloudflare 로그인 및 첫 workers.dev 배포 허용
3. workers.dev 주소에서 모든 계산기 직접 확인
4. Cloudflare에 `solsolplay.com` 추가
5. 가비아에서 Cloudflare 네임서버 두 개로 변경
6. Worker에 `solsolplay.com` 사용자 도메인 추가
7. Search Console 도메인 소유권 확인 및 사이트맵 제출

## 나중에 필요한 정보

- Google AdSense 승인 후 제공되는 실제 게시자 ID(`pub-...`)
- GA4를 사용하기로 결정한 경우 실제 측정 ID(`G-...`)

게시자 ID나 측정 ID가 없을 때 예시 값을 사이트에 넣지 않습니다.
