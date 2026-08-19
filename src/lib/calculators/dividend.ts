import { requireInteger, requireRange, round } from './common';

export function calculateDividend(
  shares: number,
  dividendPerShare: number,
  paymentsPerYear: number,
  taxRatePercent: number,
) {
  requireRange(shares, 0, 1_000_000_000, '보유 주식 수');
  requireRange(dividendPerShare, 0, 1_000_000_000, '주당 배당금');
  requireRange(paymentsPerYear, 1, 365, '연간 지급 횟수');
  requireInteger(paymentsPerYear, '연간 지급 횟수');
  requireRange(taxRatePercent, 0, 100, '예상 세율');
  const grossAnnual = shares * dividendPerShare * paymentsPerYear;
  const tax = grossAnnual * (taxRatePercent / 100);
  const netAnnual = grossAnnual - tax;
  return {
    grossAnnual: round(grossAnnual),
    tax: round(tax),
    netAnnual: round(netAnnual),
    grossPerPayment: round(grossAnnual / paymentsPerYear),
    netMonthlyAverage: round(netAnnual / 12),
  };
}
