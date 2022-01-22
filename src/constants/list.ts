export const PAY_TYPES = {
  DA: 'DA',
  HO: 'HO',
  IR: 'IR',
  MO: 'MO',
  WE: 'WE',
  YE: 'YE',
} as const;

export const salary = [
  {
    text: '시급',
    type: PAY_TYPES.HO,
  },
  {
    text: '일급',
    type: PAY_TYPES.DA,
  },
  {
    text: '주급',
    type: PAY_TYPES.WE,
  },
  {
    text: '월급',
    type: PAY_TYPES.MO,
  },
  {
    text: '연봉',
    type: PAY_TYPES.YE,
  },
  {
    text: '무관',
    type: PAY_TYPES.IR,
  },
];

export const position = [
  {
    text: '인턴(스탭)',
  },
  {
    text: '매니저',
  },
  {
    text: '디자이너',
  },
  {
    text: '원장',
  },
];
