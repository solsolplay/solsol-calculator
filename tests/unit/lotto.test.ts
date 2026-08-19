import { describe, expect, it } from 'vitest';
import { calculateLottoPrize } from '../../src/lib/calculators/lotto';

describe('calculateLottoPrize', () => {
  it('200만 원 이하는 비과세로 계산한다', () => expect(calculateLottoPrize(2_000_000).tax).toBe(0));
  it('3억 원에는 22%를 적용한다', () => expect(calculateLottoPrize(300_000_000).tax).toBe(66_000_000));
  it('3억 원 초과분에는 33%를 적용한다', () => expect(calculateLottoPrize(500_000_000).tax).toBe(132_000_000));
});

