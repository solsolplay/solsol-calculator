import { describe, expect, it } from 'vitest';
import { calculateCompound } from '../../src/lib/calculators/compound';
import { calculateSavings } from '../../src/lib/calculators/savings';

describe('investment calculators', () => {
  it('수익률 0%의 복리를 납입원금과 같게 계산한다', () => expect(calculateCompound(1_000_000, 100_000, 0, 1).finalAmount).toBe(2_200_000));
  it('12개월 적금 원금을 계산한다', () => expect(calculateSavings(300_000, 4, 12, 15.4).principal).toBe(3_600_000));
  it('적금 기간은 개월 정수만 허용한다', () => expect(() => calculateSavings(300_000, 4, 12.5, 15.4)).toThrow('정수'));
});
