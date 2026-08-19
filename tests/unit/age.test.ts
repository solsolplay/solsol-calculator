import { describe, expect, it } from 'vitest';
import { calculateAge, fullAge } from '../../src/lib/calculators/age';

describe('fullAge', () => {
  it('생일 전에는 한 살을 뺀다', () => expect(fullAge({ year: 2000, month: 8, day: 21 }, { year: 2026, month: 8, day: 20 })).toBe(25));
  it('생일 당일에는 올해 나이를 쓴다', () => expect(fullAge({ year: 2000, month: 8, day: 20 }, { year: 2026, month: 8, day: 20 })).toBe(26));
  it('생일 다음 날에도 올해 나이를 쓴다', () => expect(fullAge({ year: 2000, month: 8, day: 19 }, { year: 2026, month: 8, day: 20 })).toBe(26));
  it('미래 생년월일을 거부한다', () => expect(() => fullAge({ year: 2030, month: 1, day: 1 }, { year: 2026, month: 8, day: 20 })).toThrow());
  it('다음 생일까지 남은 날짜를 계산한다', () => expect(calculateAge({ year: 2000, month: 8, day: 21 }, { year: 2026, month: 8, day: 20 }).daysUntilBirthday).toBe(1));
});

