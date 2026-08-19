import { CalculatorError, compareDates, daysSigned, toUtcDay, validateDate, type DateParts } from './common';

function birthdayInYear(birth: DateParts, year: number): DateParts {
  if (birth.month === 2 && birth.day === 29) {
    const leap = new Date(Date.UTC(year, 1, 29)).getUTCMonth() === 1;
    return leap ? { year, month: 2, day: 29 } : { year, month: 3, day: 1 };
  }
  return { year, month: birth.month, day: birth.day };
}

export function fullAge(birth: DateParts, 기준일: DateParts) {
  validateDate(birth, '생년월일');
  validateDate(기준일, '기준일');
  if (compareDates(birth, 기준일) > 0) throw new CalculatorError('생년월일은 기준일보다 이전이어야 합니다.');
  let age = 기준일.year - birth.year;
  const birthday = birthdayInYear(birth, 기준일.year);
  if (toUtcDay(기준일) < toUtcDay(birthday)) age -= 1;
  return age;
}

export function calculateAge(birth: DateParts, 기준일: DateParts) {
  const age = fullAge(birth, 기준일);
  let nextBirthday = birthdayInYear(birth, 기준일.year);
  if (toUtcDay(nextBirthday) < toUtcDay(기준일)) nextBirthday = birthdayInYear(birth, 기준일.year + 1);
  return {
    age,
    daysLived: daysSigned(birth, 기준일),
    daysUntilBirthday: daysSigned(기준일, nextBirthday),
    nextBirthday,
  };
}

