import { requireRange, round } from './common';

export function calculateCompound(
  principal: number,
  monthlyContribution: number,
  annualRatePercent: number,
  years: number,
) {
  requireRange(principal, 0, 100_000_000_000, '초기 투자금');
  requireRange(monthlyContribution, 0, 1_000_000_000, '월 적립금');
  requireRange(annualRatePercent, -99, 100, '연 수익률');
  requireRange(years, 1 / 12, 100, '투자 기간');
  const months = Math.round(years * 12);
  const monthlyRate = annualRatePercent / 100 / 12;
  const growth = (1 + monthlyRate) ** months;
  const futurePrincipal = principal * growth;
  const futureContributions = monthlyRate === 0
    ? monthlyContribution * months
    : monthlyContribution * ((growth - 1) / monthlyRate);
  const contributed = principal + monthlyContribution * months;
  const finalAmount = futurePrincipal + futureContributions;
  return {
    months,
    contributed: round(contributed),
    earnings: round(finalAmount - contributed),
    finalAmount: round(finalAmount),
  };
}

