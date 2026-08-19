import { describe, expect, it } from 'vitest';
import { calculateChange, calculateRatio } from '../../src/lib/calculators/percentage';
import { calculateDiscount } from '../../src/lib/calculators/discount';

describe('percentage and discount', () => {
  it('일부의 비율을 계산한다', () => expect(calculateRatio(50, 200)).toBe(25));
  it('증가율을 계산한다', () => expect(calculateChange(100, 120)).toBe(20));
  it('연속 할인을 순서대로 적용한다', () => expect(calculateDiscount(100000, 20, 10)).toEqual({ finalPrice: 72000, saved: 28000, actualRate: 28 }));
});

