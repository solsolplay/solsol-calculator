import { requireRange, round } from './common';

export function calculateLottoPrize(prize: number) {
  requireRange(prize, 0, 10_000_000_000_000, '당첨금');
  let tax = 0;
  let explanation = '200만 원 이하 비과세 기준을 적용했습니다.';
  if (prize > 2_000_000 && prize <= 300_000_000) {
    tax = prize * 0.22;
    explanation = '당첨금 전체에 소득세 20%와 지방소득세 상당액을 합한 22%를 적용한 예상값입니다.';
  } else if (prize > 300_000_000) {
    tax = 300_000_000 * 0.22 + (prize - 300_000_000) * 0.33;
    explanation = '3억 원까지 22%, 3억 원 초과분에 33%를 적용한 예상값입니다.';
  }
  return {
    prize: round(prize),
    tax: round(tax),
    net: round(prize - tax),
    effectiveRate: prize === 0 ? 0 : round((tax / prize) * 100, 2),
    explanation,
  };
}

