import { CalculatorError, parseDateInput } from './calculators/common';

export const won = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW', maximumFractionDigits: 0 });
export const number = new Intl.NumberFormat('ko-KR', { maximumFractionDigits: 2 });

export function inputNumber(id: string, label: string) {
  const input = document.getElementById(id) as HTMLInputElement | null;
  if (!input || input.value.trim() === '') throw new CalculatorError(`${label}을(를) 입력해 주세요.`);
  return Number(input.value);
}

export function inputDate(id: string, label: string) {
  const input = document.getElementById(id) as HTMLInputElement | null;
  return parseDateInput(input?.value ?? '', label);
}

export function inputSelect(id: string) {
  return (document.getElementById(id) as HTMLSelectElement | null)?.value ?? '';
}

export function setText(id: string, value: string | number) {
  const element = document.getElementById(id);
  if (element) element.textContent = String(value);
}

export function showResult(errorId: string, emptyId: string, contentId: string) {
  setText(errorId, '');
  const empty = document.getElementById(emptyId);
  const content = document.getElementById(contentId);
  if (empty) empty.hidden = true;
  if (content) content.hidden = false;
}

export function showError(errorId: string, error: unknown) {
  const message = error instanceof Error ? error.message : '계산 중 문제가 생겼습니다. 입력값을 다시 확인해 주세요.';
  setText(errorId, message);
}

export function localTodayInput() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
  return local.toISOString().slice(0, 10);
}

export function formatDate(parts: { year: number; month: number; day: number }) {
  return `${parts.year}년 ${parts.month}월 ${parts.day}일`;
}

