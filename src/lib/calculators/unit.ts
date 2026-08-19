import { CalculatorError, requireFinite, round } from './common';

export type UnitCategory = 'length' | 'mass' | 'area' | 'temperature';

const linearUnits: Record<Exclude<UnitCategory, 'temperature'>, Record<string, number>> = {
  length: { mm: 0.001, cm: 0.01, m: 1, km: 1000, inch: 0.0254, ft: 0.3048 },
  mass: { g: 0.001, kg: 1, lb: 0.45359237 },
  area: { m2: 1, pyeong: 3.305785, km2: 1_000_000, ft2: 0.09290304 },
};

function temperatureToCelsius(value: number, unit: string) {
  if (unit === 'c') return value;
  if (unit === 'f') return (value - 32) * 5 / 9;
  if (unit === 'k') return value - 273.15;
  throw new CalculatorError('지원하지 않는 온도 단위입니다.');
}

function celsiusToTemperature(value: number, unit: string) {
  if (unit === 'c') return value;
  if (unit === 'f') return value * 9 / 5 + 32;
  if (unit === 'k') return value + 273.15;
  throw new CalculatorError('지원하지 않는 온도 단위입니다.');
}

export function convertUnit(category: UnitCategory, value: number, from: string, to: string) {
  requireFinite(value, '변환할 값');
  if (category === 'temperature') {
    return round(celsiusToTemperature(temperatureToCelsius(value, from), to), 6);
  }
  const units = linearUnits[category];
  if (!units || !units[from] || !units[to]) throw new CalculatorError('지원하지 않는 단위 조합입니다.');
  return round(value * units[from] / units[to], 6);
}

