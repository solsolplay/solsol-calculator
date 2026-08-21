export type CategoryId = 'money' | 'date-time' | 'health-life' | 'fun';

export type CalculatorItem = {
  id: string;
  name: string;
  seoTitle: string;
  labName: string;
  shortName: string;
  path: string;
  category: CategoryId;
  summary: string;
  detail: string;
  icon: string;
  mascot: string;
  scene: string;
  sceneKind: 'reference' | 'generated';
  sceneAlt: string;
  sceneCaption: string;
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
    seoTitle: '만 나이 계산기 (한국나이연구소)',
    labName: '한국나이연구소',
    shortName: '나이 계산기',
    path: '/calculators/age/',
    category: 'date-time',
    summary: '생년월일과 기준일로 만 나이를 계산해요.',
    detail: '생일 경과 여부와 다음 생일까지 남은 날짜를 함께 보여줍니다.',
    icon: '🐭',
    mascot: '달력 쥐',
    scene: '/images/scenes/reference-age.webp',
    sceneKind: 'reference',
    sceneAlt: '생일 시간정원에서 달력 문을 여는 쥐와 토끼',
    sceneCaption: '달력을 솔솔 넘기는 중…',
    accent: 'teal',
    status: 'public',
    popular: true,
    related: ['date-difference', 'd-day'],
  },
  {
    id: 'dividend',
    name: '배당금 계산기',
    seoTitle: '배당금 계산기 (배당금연구소)',
    labName: '배당금연구소',
    shortName: '배당금 계산기',
    path: '/calculators/dividend/',
    category: 'money',
    summary: '주식 수와 주당 배당금으로 세전·세후 금액을 계산해요.',
    detail: '지급 횟수와 예상 세율을 직접 바꾸어 연간·월평균 배당금을 비교합니다.',
    icon: '🐷',
    mascot: '저금통 돼지',
    scene: '/images/scenes/dividend.webp',
    sceneKind: 'generated',
    sceneAlt: '배당 정원에서 코인을 정리하는 돼지 회계사와 토끼',
    sceneCaption: '배당 코인을 차곡차곡 모으는 중…',
    accent: 'gold',
    status: 'public',
    popular: true,
    related: ['compound-interest', 'savings'],
  },
  {
    id: 'lotto-prize',
    name: '로또 당첨금 실수령액 계산기',
    seoTitle: '로또 당첨금 계산기 (로또연구소)',
    labName: '로또연구소',
    shortName: '로또 계산기',
    path: '/calculators/lotto-prize/',
    category: 'fun',
    summary: '당첨금에 따른 예상 세금과 실수령액을 계산해요.',
    detail: '2026년 8월 확인 기준의 복권 당첨금 세율을 적용한 참고용 예상값입니다.',
    icon: '🐯',
    mascot: '행운 호랑이',
    scene: '/images/scenes/reference-lotto-prize.webp',
    sceneKind: 'reference',
    sceneAlt: '별빛 행운 축제에서 당첨 티켓을 펼치는 호랑이와 용',
    sceneCaption: '행운 티켓을 펼치는 중…',
    accent: 'coral',
    status: 'public',
    popular: true,
    related: ['percentage', 'discount'],
  },
  {
    id: 'loan-interest',
    name: '대출 이자 계산기',
    seoTitle: '대출 이자 계산기 (대출이자연구소)',
    labName: '대출이자연구소',
    shortName: '대출 계산기',
    path: '/calculators/loan-interest/',
    category: 'money',
    summary: '원금·금리·기간·상환방식으로 월 납입액을 계산해요.',
    detail: '원리금균등·원금균등·만기일시상환의 첫 달과 총이자를 비교합니다.',
    icon: '🐮',
    mascot: '은행 소',
    scene: '/images/scenes/reference-loan-interest.webp',
    sceneKind: 'reference',
    sceneAlt: '상환역에서 대출 상환 계획을 준비하는 소와 개',
    sceneCaption: '든든한 상환 다리를 놓는 중…',
    accent: 'blue',
    status: 'public',
    popular: true,
    related: ['savings', 'compound-interest'],
  },
  {
    id: 'bmi',
    name: 'BMI 계산기',
    seoTitle: 'BMI 계산기 (BMI연구소)',
    labName: 'BMI연구소',
    shortName: 'BMI 계산기',
    path: '/calculators/bmi/',
    category: 'health-life',
    summary: '키와 몸무게로 성인 체질량지수를 계산해요.',
    detail: '질병관리청 지표의 성인 분류 기준을 참고해 결과를 설명합니다.',
    icon: '🐰',
    mascot: '운동 토끼',
    scene: '/images/scenes/reference-bmi.webp',
    sceneKind: 'reference',
    sceneAlt: '건강 바람길을 함께 달리는 말과 양',
    sceneCaption: '나에게 맞는 건강 길을 여는 중…',
    accent: 'green',
    status: 'public',
    popular: true,
    related: ['unit-converter', 'percentage'],
  },
  {
    id: 'date-difference',
    name: '날짜 차이 계산기',
    seoTitle: '날짜 차이 계산기 (날짜연구소)',
    labName: '날짜연구소',
    shortName: '날짜 계산기',
    path: '/calculators/date-difference/',
    category: 'date-time',
    summary: '두 날짜 사이의 일수와 주수를 계산해요.',
    detail: '시작일 포함 여부를 선택하고 날짜 순서도 안전하게 확인합니다.',
    icon: '🐴',
    mascot: '시계 말',
    scene: '/images/scenes/reference-date-difference.webp',
    sceneKind: 'reference',
    sceneAlt: '별자리 시계탑에서 두 날짜 사이를 재는 뱀과 닭',
    sceneCaption: '두 날짜 사이를 재는 중…',
    accent: 'violet',
    status: 'public',
    popular: true,
    related: ['d-day', 'age'],
  },
  {
    id: 'percentage',
    name: '퍼센트 계산기',
    seoTitle: '퍼센트 계산기 (퍼센트연구소)',
    labName: '퍼센트연구소',
    shortName: '퍼센트 계산기',
    path: '/calculators/percentage/',
    category: 'fun',
    summary: '비율과 증감률을 두 가지 방식으로 계산해요.',
    detail: '전체 중 일부의 비율 또는 이전 값 대비 새 값의 변화율을 확인합니다.',
    icon: '🐵',
    mascot: '수학 원숭이',
    scene: '/images/scenes/percentage.webp',
    sceneKind: 'generated',
    sceneAlt: '수학 관측소에서 과일 비율을 비교하는 원숭이와 쥐',
    sceneCaption: '여러 비율을 재미있게 비교하는 중…',
    accent: 'violet',
    status: 'public',
    related: ['discount', 'dividend'],
  },
  {
    id: 'discount',
    name: '할인율 계산기',
    seoTitle: '할인율 계산기 (할인연구소)',
    labName: '할인연구소',
    shortName: '할인 계산기',
    path: '/calculators/discount/',
    category: 'money',
    summary: '정가와 할인율로 최종 결제액과 절약액을 계산해요.',
    detail: '첫 할인 뒤 추가 쿠폰을 순서대로 적용해 실제 할인율까지 보여줍니다.',
    icon: '🐔',
    mascot: '쇼핑 닭',
    scene: '/images/scenes/discount.webp',
    sceneKind: 'generated',
    sceneAlt: '선물 시장에서 가격을 비교하는 닭 상인과 개 손님',
    sceneCaption: '알뜰한 선물을 고르는 중…',
    accent: 'coral',
    status: 'public',
    related: ['percentage', 'savings'],
  },
  {
    id: 'compound-interest',
    name: '복리 계산기',
    seoTitle: '복리 계산기 (복리연구소)',
    labName: '복리연구소',
    shortName: '복리 계산기',
    path: '/calculators/compound-interest/',
    category: 'money',
    summary: '초기금과 월 적립금의 장기 복리 결과를 계산해요.',
    detail: '월 복리·월말 적립을 가정해 납입원금과 예상 수익을 나누어 보여줍니다.',
    icon: '🐲',
    mascot: '성장 용',
    scene: '/images/scenes/compound-interest.webp',
    sceneKind: 'generated',
    sceneAlt: '복리 온실에서 작은 나무를 키우는 용 정원사와 양',
    sceneCaption: '작은 씨앗을 큰 나무로 키우는 중…',
    accent: 'teal',
    status: 'public',
    related: ['dividend', 'savings'],
  },
  {
    id: 'savings',
    name: '적금 이자 계산기',
    seoTitle: '적금 이자 계산기 (적금연구소)',
    labName: '적금연구소',
    shortName: '적금 계산기',
    path: '/calculators/savings/',
    category: 'money',
    summary: '월 납입액·기간·금리로 만기 예상액을 계산해요.',
    detail: '매월 초 납입하는 단리식 정기적금의 세전·세후 예상 이자를 보여줍니다.',
    icon: '🐑',
    mascot: '구름 양',
    scene: '/images/scenes/savings.webp',
    sceneKind: 'generated',
    sceneAlt: '구름 저금소에서 매달 코인 병을 채우는 양과 돼지',
    sceneCaption: '매달 꼬박꼬박 목표를 채우는 중…',
    accent: 'gold',
    status: 'public',
    related: ['compound-interest', 'loan-interest'],
  },
  {
    id: 'd-day',
    name: 'D-day 계산기',
    seoTitle: 'D-day 계산기 (디데이연구소)',
    labName: '디데이연구소',
    shortName: 'D-day 계산기',
    path: '/calculators/d-day/',
    category: 'date-time',
    summary: '기준일에서 목표일까지 남은 날짜를 계산해요.',
    detail: '미래는 D-숫자, 오늘은 D-day, 지난 날짜는 D+숫자로 표시합니다.',
    icon: '🐶',
    mascot: '약속 지킴이 개',
    scene: '/images/scenes/d-day.webp',
    sceneKind: 'generated',
    sceneAlt: '약속 정거장에서 목표를 가리키는 개 역장과 토끼',
    sceneCaption: '설레는 약속까지 남은 길을 재는 중…',
    accent: 'blue',
    status: 'public',
    related: ['date-difference', 'age'],
  },
  {
    id: 'unit-converter',
    name: '생활 단위 변환기',
    seoTitle: '단위 변환기 (단위변환연구소)',
    labName: '단위변환연구소',
    shortName: '단위 변환기',
    path: '/calculators/unit-converter/',
    category: 'health-life',
    summary: '길이·무게·넓이·온도 단위를 빠르게 바꿔요.',
    detail: '자주 쓰는 미터·인치·킬로그램·파운드·평·제곱미터·온도를 지원합니다.',
    icon: '🐍',
    mascot: '척척박사 뱀',
    scene: '/images/scenes/unit-converter.webp',
    sceneKind: 'generated',
    sceneAlt: '발명 공방에서 자와 저울을 설명하는 뱀 교수와 말',
    sceneCaption: '여러 단위를 척척 바꾸는 중…',
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
