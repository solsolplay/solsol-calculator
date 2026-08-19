import { describe, expect, it } from 'vitest';
import { convertUnit } from '../../src/lib/calculators/unit';

describe('convertUnit', () => {
  it('인치를 센티미터로 바꾼다', () => expect(convertUnit('length', 1, 'inch', 'cm')).toBe(2.54));
  it('평을 제곱미터로 바꾼다', () => expect(convertUnit('area', 1, 'pyeong', 'm2')).toBe(3.305785));
  it('섭씨를 화씨로 바꾼다', () => expect(convertUnit('temperature', 0, 'c', 'f')).toBe(32));
});

