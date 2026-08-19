import { describe, expect, it } from 'vitest';
import { calculateDividend } from '../../src/lib/calculators/dividend';

describe('calculateDividend', () => {
  it('세전·세후 연 배당금을 계산한다', () => {
    const result = calculateDividend(100, 500, 4, 15.4);
    expect(result.grossAnnual).toBe(200000);
    expect(result.netAnnual).toBe(169200);
  });
  it('100%를 넘는 세율을 거부한다', () => expect(() => calculateDividend(1, 1, 1, 101)).toThrow());
  it('지급 횟수는 정수만 허용한다', () => expect(() => calculateDividend(10, 500, 2.5, 15.4)).toThrow('정수'));
});
