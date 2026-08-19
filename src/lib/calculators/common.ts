export class CalculatorError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CalculatorError';
  }
}

export function requireFinite(value: number, label: string) {
  if (!Number.isFinite(value)) throw new CalculatorError(`${label}을(를) 숫자로 입력해 주세요.`);
  return value;
}

export function requireRange(value: number, min: number, max: number, label: string) {
  requireFinite(value, label);
  if (value < min || value > max) {
    throw new CalculatorError(`${label}은(는) ${min.toLocaleString('ko-KR')} 이상 ${max.toLocaleString('ko-KR')} 이하로 입력해 주세요.`);
  }
  return value;
}

export function requireInteger(value: number, label: string) {
  requireFinite(value, label);
  if (!Number.isInteger(value)) throw new CalculatorError(`${label}은(는) 정수로 입력해 주세요.`);
  return value;
}

export function round(value: number, digits = 2) {
  const scale = 10 ** digits;
  return Math.round((value + Number.EPSILON) * scale) / scale;
}

export type DateParts = { year: number; month: number; day: number };

export function parseDateInput(value: string, label = '날짜'): DateParts {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) throw new CalculatorError(`${label}를 달력에서 선택해 주세요.`);
  const parts = { year: Number(match[1]), month: Number(match[2]), day: Number(match[3]) };
  validateDate(parts, label);
  return parts;
}

export function validateDate(parts: DateParts, label = '날짜') {
  requireRange(parts.year, 1, 9999, `${label}의 연도`);
  requireRange(parts.month, 1, 12, `${label}의 월`);
  requireRange(parts.day, 1, 31, `${label}의 일`);
  const checked = new Date(Date.UTC(parts.year, parts.month - 1, parts.day));
  if (
    checked.getUTCFullYear() !== parts.year ||
    checked.getUTCMonth() + 1 !== parts.month ||
    checked.getUTCDate() !== parts.day
  ) {
    throw new CalculatorError(`${label}에 실제로 존재하는 날짜를 입력해 주세요.`);
  }
  return parts;
}

export function toUtcDay(parts: DateParts) {
  validateDate(parts);
  return Date.UTC(parts.year, parts.month - 1, parts.day);
}

export function compareDates(a: DateParts, b: DateParts) {
  return Math.sign(toUtcDay(a) - toUtcDay(b));
}

export function daysSigned(from: DateParts, to: DateParts) {
  return Math.round((toUtcDay(to) - toUtcDay(from)) / 86_400_000);
}
