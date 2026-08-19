import { requireRange, round } from './common';

export function calculateBmi(heightCm: number, weightKg: number) {
  requireRange(heightCm, 50, 250, '키');
  requireRange(weightKg, 10, 500, '몸무게');
  const bmi = weightKg / (heightCm / 100) ** 2;
  const category = bmi < 18.5 ? '저체중' : bmi < 25 ? '정상 범위' : '비만 기준 이상';
  return { bmi: round(bmi, 1), category };
}

