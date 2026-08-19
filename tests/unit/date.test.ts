import { describe, expect, it } from 'vitest';
import { calculateDateDifference, calculateDday } from '../../src/lib/calculators/date';

describe('date calculators', () => {
  const start = { year: 2026, month: 8, day: 20 };
  const end = { year: 2026, month: 8, day: 27 };
  it('두 날짜의 차이를 계산한다', () => expect(calculateDateDifference(start, end).days).toBe(7));
  it('양쪽 날짜 포함을 계산한다', () => expect(calculateDateDifference(start, end, true).days).toBe(8));
  it('D-day 표기를 만든다', () => expect(calculateDday(start, end).label).toBe('D-7'));
});

