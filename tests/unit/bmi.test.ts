import { describe, expect, it } from 'vitest';
import { calculateBmi } from '../../src/lib/calculators/bmi';

describe('calculateBmi', () => {
  it('BMI와 정상 범위를 계산한다', () => expect(calculateBmi(170, 65)).toEqual({ bmi: 22.5, category: '정상 범위' }));
  it('비현실적인 키를 거부한다', () => expect(() => calculateBmi(30, 65)).toThrow());
});

