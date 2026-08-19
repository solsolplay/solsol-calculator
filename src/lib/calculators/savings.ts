import { requireInteger, requireRange, round } from './common';

export function calculateSavings(monthlyDeposit: number, annualRatePercent: number, months: number, taxRatePercent: number) {
  requireRange(monthlyDeposit, 1, 1_000_000_000, '월 납입액');
  requireRange(annualRatePercent, 0, 100, '연 이자율');
  requireRange(months, 1, 1200, '납입 기간');
  requireInteger(months, '납입 기간');
  requireRange(taxRatePercent, 0, 100, '이자 세율');
  const principal = monthlyDeposit * months;
  const grossInterest = monthlyDeposit * (annualRatePercent / 100 / 12) * (months * (months + 1) / 2);
  const tax = grossInterest * (taxRatePercent / 100);
  return {
    principal: round(principal),
    grossInterest: round(grossInterest),
    tax: round(tax),
    netInterest: round(grossInterest - tax),
    maturityAmount: round(principal + grossInterest - tax),
  };
}
