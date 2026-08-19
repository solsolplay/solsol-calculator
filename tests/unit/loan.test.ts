import { describe, expect, it } from 'vitest';
import { calculateLoan } from '../../src/lib/calculators/loan';

describe('calculateLoan', () => {
  it('무이자 원리금균등을 정확히 나눈다', () => {
    const result = calculateLoan(12_000_000, 0, 12, 'equal-payment');
    expect(result.firstPayment).toBe(1_000_000);
    expect(result.totalInterest).toBe(0);
  });
  it('원금균등은 첫 달이 마지막 달보다 크다', () => {
    const result = calculateLoan(10_000_000, 6, 12, 'equal-principal');
    expect(result.firstPayment).toBeGreaterThan(result.lastPayment);
  });
  it('상환 기간은 개월 정수만 허용한다', () => expect(() => calculateLoan(10_000_000, 4, 12.5, 'equal-payment')).toThrow('정수'));
});
