# GA4 최소 수집 운영 가이드

## 연결 정보

- 운영 도메인: `https://solsolplay.com`
- GA4 측정 ID: `G-WPSXDCLX98`
- 코드 위치: `src/components/AnalyticsConsent.astro`

GA4 측정 ID는 웹페이지 소스에 표시되는 식별자이며 비밀번호나 API 비밀 키가 아닙니다.

## 수집 원칙

1. 방문자가 `통계 허용`을 누른 후에만 Google 태그를 불러옵니다.
2. 거부해도 모든 계산기는 동일하게 작동해야 합니다.
3. Google 신호 데이터와 맞춤 광고 신호는 활성화하지 않습니다.
4. GA4 이벤트 데이터 보관 기간은 2개월로 설정합니다.
5. 계산 원문 입력값과 결과 숫자는 절대 이벤트 매개변수에 넣지 않습니다.

## 사용하는 추가 이벤트

| 이벤트 | 목적 | 허용 매개변수 |
| --- | --- | --- |
| `calculation_complete` | 계산 완료 횟수 확인 | `calculator_id` |
| `calculation_error` | 입력 오류 발생 현황 확인 | `calculator_id`, `error_type` |
| `related_calculator_click` | 관련 계산기 이동 확인 | `calculator_id`, `target_calculator` |

`calculator_id`와 `target_calculator`는 `age`, `bmi`, `loan-interest` 같은 고정 페이지 식별자만 사용합니다. `error_type`은 현재 `validation`만 사용합니다.

## 배포 후 확인

1. 시크릿 창으로 `https://solsolplay.com` 열기
2. 동의 창이 보이는지 확인
3. `거부` 후 계산기가 정상 작동하는지 확인
4. 개인정보처리방침에서 `통계 쿠키 선택 다시 하기` 누르기
5. `통계 허용` 후 GA4 `보고서 > 실시간` 확인
6. 계산기 하나를 실행하고 `calculation_complete`가 보이는지 확인

Google 보고서 반영에는 시간이 걸릴 수 있으며, 초기 점검은 `실시간` 보고서를 사용합니다.
