import { requireRange, round } from './common';

export function calculateDiscount(originalPrice: number, discountRate: number, extraRate = 0) {
  requireRange(originalPrice, 0, 100_000_000_000, '정가');
  requireRange(discountRate, 0, 100, '할인율');
  requireRange(extraRate, 0, 100, '추가 할인율');
  const afterFirst = originalPrice * (1 - discountRate / 100);
  const finalPrice = afterFirst * (1 - extraRate / 100);
  const saved = originalPrice - finalPrice;
  return {
    finalPrice: round(finalPrice),
    saved: round(saved),
    actualRate: originalPrice === 0 ? 0 : round((saved / originalPrice) * 100, 2),
  };
}

