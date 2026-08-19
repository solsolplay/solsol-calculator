import { CalculatorError, requireInteger, requireRange, round } from './common';

export type RepaymentType = 'equal-payment' | 'equal-principal' | 'bullet';

export function calculateLoan(principal: number, annualRatePercent: number, months: number, type: RepaymentType) {
  requireRange(principal, 1, 100_000_000_000, '대출 원금');
  requireRange(annualRatePercent, 0, 100, '연 이자율');
  requireRange(months, 1, 1200, '상환 기간');
  requireInteger(months, '상환 기간');
  if (!['equal-payment', 'equal-principal', 'bullet'].includes(type)) {
    throw new CalculatorError('상환방식을 선택해 주세요.');
  }

  const rate = annualRatePercent / 100 / 12;
  let firstPayment = 0;
  let lastPayment = 0;
  let totalPayment = 0;

  if (type === 'equal-payment') {
    const monthly = rate === 0
      ? principal / months
      : principal * (rate * (1 + rate) ** months) / ((1 + rate) ** months - 1);
    firstPayment = monthly;
    lastPayment = monthly;
    totalPayment = monthly * months;
  } else if (type === 'equal-principal') {
    const monthlyPrincipal = principal / months;
    let balance = principal;
    for (let month = 1; month <= months; month += 1) {
      const payment = monthlyPrincipal + balance * rate;
      if (month === 1) firstPayment = payment;
      if (month === months) lastPayment = payment;
      totalPayment += payment;
      balance -= monthlyPrincipal;
    }
  } else {
    firstPayment = principal * rate;
    lastPayment = principal + principal * rate;
    totalPayment = principal + principal * rate * months;
  }

  return {
    firstPayment: round(firstPayment),
    lastPayment: round(lastPayment),
    averagePayment: round(totalPayment / months),
    totalInterest: round(totalPayment - principal),
    totalPayment: round(totalPayment),
  };
}
