import { CalculatorError, requireFinite, round } from './common';

export function calculateRatio(part: number, whole: number) {
  requireFinite(part, '일부 값');
  requireFinite(whole, '전체 값');
  if (whole === 0) throw new CalculatorError('전체 값은 0이 될 수 없습니다.');
  return round((part / whole) * 100, 2);
}

export function calculateChange(previous: number, current: number) {
  requireFinite(previous, '이전 값');
  requireFinite(current, '새 값');
  if (previous === 0) throw new CalculatorError('이전 값은 0이 될 수 없습니다.');
  return round(((current - previous) / Math.abs(previous)) * 100, 2);
}

