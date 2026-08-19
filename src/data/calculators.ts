export type CategoryId = 'money' | 'date-time' | 'health-life' | 'fun';

export type CalculatorItem = {
  id: string;
  name: string;
  shortName: string;
  path: string;
  category: CategoryId;
  summary: string;
  detail: string;
  icon: string;
  mascot: string;
  accent: 'teal' | 'gold' | 'coral' | 'blue' | 'violet' | 'green';
  status: 'public' | 'draft';
  popular?: boolean;
  related: string[];
};

export const categories = [
  {
    id: 'money' as const,
    name: '돈과 투자',
    path: '/categories/money/',
    icon: '🌱',
    description: '배당·대출·할인·저축처럼 돈의 흐름을 숫자로 확인해요.',
  },
  {
    id: 'date-time' as const,
    name: '날짜와 시간',
    path: '/categories/date-time/',
    icon: '📅',
    description: '나이·날짜 차이·D-day를 달력 기준으로 알아봐요.',
  },
  {
    id: 'health-life' as const,
    name: '건강과 생활',
    path: '/categories/health-life/',
    icon: '💚',
    description: 'BMI와 단위 변환처럼 일상에서 자주 쓰는 계산을 모았어요.',
  },
  {
    id: 'fun' as const,
    name: '재미와 확률',
    path: '/categories/fun/',
    icon: '🎉',
    description: '로또 당첨금과 퍼센트처럼 궁금한 숫자를 재미있게 풀어봐요.',
  },
];

export const calculators: CalculatorItem[] = [
  {
    id: 'age',
    name: '만 나이 계산기',
    shortName: '나이 계산기',
    path: '/calculators/age/',
    category: 'date-time',
    summary: '생년월일과 기준일로 만 나이를 계산해요.',
    detail: '생일 경과 여부와 다음 생일까지 남은 날짜를 함께 보여줍니다.',
    icon: '🐭',
    mascot: '달력 쥐',
    accent: 'teal',
    status: 'public',
    popular: true,
    related: ['date-difference', 'd-day'],
  },
  {
    id: 'dividend',
    name: '배당금 계산기',
    shortName: '배당금 계산기',
    path: '/calculators/dividend/',
    category: 'money',
    summary: '주식 수와 주당 배당금으로 세전·세후 금액을 계산해요.',
    detail: '지급 횟수와 예상 세율을 직접 바꾸어 연간·월평균 배당금을 비교합니다.',
    icon: '🐷',
    mascot: '저금통 돼지',
    accent: 'gold',
    status: 'public',
    popular: true,
    related: ['compound-interest', 'savings'],
  },
  {
    id: 'lotto-prize',
    name: '로또 당첨금 실수령액 계산기',
    shortName: '로또 계산기',
    path: '/calculators/lotto-prize/',
    category: 'fun',
    summary: '당첨금에 따른 예상 세금과 실수령액을 계산해요.',
    detail: '2026년 8월 확인 기준의 복권 당첨금 세율을 적용한 참고용 예상값입니다.',
    icon: '🐯',
    mascot: '행운 호랑이',
    accent: 'coral',
    status: 'public',
    popular: true,
    related: ['percentage', 'discount'],
  },
  {
    id: 'loan-interest',
    name: '대출 이자 계산기',
    shortName: '대출 계산기',
    path: '/calculators/loan-interest/',
    category: 'money',
    summary: '원금·금리·기간·상환방식으로 월 납입액을 계산해요.',
    detail: '원리금균등·원금균등·만기일시상환의 첫 달과 총이자를 비교합니다.',
    icon: '🐮',
    mascot: '은행 소',
    accent: 'blue',
    status: 'public',
    popular: true,
    related: ['savings', 'compound-interest'],
  },
  {
    id: 'bmi',
    name: 'BMI 계산기',
    shortName: 'BMI 계산기',
    path: '/calculators/bmi/',
    category: 'health-life',
    summary: '키와 몸무게로 성인 체질량지수를 계산해요.',
    detail: '질병관리청 지표의 성인 분류 기준을 참고해 결과를 설명합니다.',
    icon: '🐰',
    mascot: '운동 토끼',
    accent: 'green',
    status: 'public',
    popular: true,
    related: ['unit-converter', 'percentage'],
  },
  {
    id: 'date-difference',
    name: '날짜 차이 계산기',
    shortName: '날짜 계산기',
    path: '/calculators/date-difference/',
    category: 'date-time',
    summary: '두 날짜 사이의 일수와 주수를 계산해요.',
    detail: '시작일 포함 여부를 선택하고 날짜 순서도 안전하게 확인합니다.',
    icon: '🐴',
    mascot: '시계 말',
    accent: 'violet',
    status: 'public',
    popular: true,
    related: ['d-day', 'age'],
  },
  {
    id: 'percentage',
    name: '퍼센트 계산기',
    shortName: '퍼센트 계산기',
    path: '/calculators/percentage/',
    category: 'fun',
    summary: '비율과 증감률을 두 가지 방식으로 계산해요.',
    detail: '전체 중 일부의 비율 또는 이전 값 대비 새 값의 변화율을 확인합니다.',
    icon: '🐵',
    mascot: '수학 원숭이',
    accent: 'violet',
    status: 'public',
    related: ['discount', 'dividend'],
  },
  {
    id: 'discount',
    name: '할인율 계산기',
    shortName: '할인 계산기',
    path: '/calculators/discount/',
    category: 'money',
    summary: '정가와 할인율로 최종 결제액과 절약액을 계산해요.',
    detail: '첫 할인 뒤 추가 쿠폰을 순서대로 적용해 실제 할인율까지 보여줍니다.',
    icon: '🐔',
    mascot: '쇼핑 닭',
    accent: 'coral',
    status: 'public',
    related: ['percentage', 'savings'],
  },
  {
    id: 'compound-interest',
    name: '복리 계산기',
    shortName: '복리 계산기',
    path: '/calculators/compound-interest/',
    category: 'money',
    summary: '초기금과 월 적립금의 장기 복리 결과를 계산해요.',
    detail: '월 복리·월말 적립을 가정해 납입원금과 예상 수익을 나누어 보여줍니다.',
    icon: '🐲',
    mascot: '성장 용',
    accent: 'teal',
    status: 'public',
    related: ['dividend', 'savings'],
  },
  {
    id: 'savings',
    name: '적금 이자 계산기',
    shortName: '적금 계산기',
    path: '/calculators/savings/',
    category: 'money',
    summary: '월 납입액·기간·금리로 만기 예상액을 계산해요.',
    detail: '매월 초 납입하는 단리식 정기적금의 세전·세후 예상 이자를 보여줍니다.',
    icon: '🐑',
    mascot: '구름 양',
    accent: 'gold',
    status: 'public',
    related: ['compound-interest', 'loan-interest'],
  },
  {
    id: 'd-day',
    name: 'D-day 계산기',
    shortName: 'D-day 계산기',
    path: '/calculators/d-day/',
    category: 'date-time',
    summary: '기준일에서 목표일까지 남은 날짜를 계산해요.',
    detail: '미래는 D-숫자, 오늘은 D-day, 지난 날짜는 D+숫자로 표시합니다.',
    icon: '🐶',
    mascot: '약속 지킴이 개',
    accent: 'blue',
    status: 'public',
    related: ['date-difference', 'age'],
  },
  {
    id: 'unit-converter',
    name: '생활 단위 변환기',
    shortName: '단위 변환기',
    path: '/calculators/unit-converter/',
    category: 'health-life',
    summary: '길이·무게·넓이·온도 단위를 빠르게 바꿔요.',
    detail: '자주 쓰는 미터·인치·킬로그램·파운드·평·제곱미터·온도를 지원합니다.',
    icon: '🐍',
    mascot: '척척박사 뱀',
    accent: 'green',
    status: 'public',
    related: ['bmi', 'percentage'],
  },
];

export const publicCalculators = calculators.filter((item) => item.status === 'public');

export function getCalculator(id: string) {
  const calculator = calculators.find((item) => item.id === id);
  if (!calculator) throw new Error(`Unknown calculator: ${id}`);
  return calculator;
}

export function getCategory(id: CategoryId) {
  const category = categories.find((item) => item.id === id);
  if (!category) throw new Error(`Unknown category: ${id}`);
  return category;
}

export function getRelatedCalculators(id: string) {
  return getCalculator(id).related
    .map((relatedId) => calculators.find((item) => item.id === relatedId))
    .filter((item): item is CalculatorItem => Boolean(item && item.status === 'public'));
}

