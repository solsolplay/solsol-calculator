import { CalculatorError, daysSigned, type DateParts } from './common';

export function calculateDateDifference(start: DateParts, end: DateParts, includeBothDays = false) {
  const signed = daysSigned(start, end);
  if (signed < 0) throw new CalculatorError('종료일은 시작일과 같거나 이후여야 합니다.');
  const days = signed + (includeBothDays ? 1 : 0);
  return { days, weeks: Math.floor(days / 7), remainingDays: days % 7 };
}

export function calculateDday(base: DateParts, target: DateParts) {
  const difference = daysSigned(base, target);
  return {
    difference,
    label: difference > 0 ? `D-${difference}` : difference < 0 ? `D+${Math.abs(difference)}` : 'D-day',
  };
}

