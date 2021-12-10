import { atom } from 'recoil';
import { position, salary } from 'src/constants/list';

const FILTER = 'Filter';
export const FILTER_KEY = {
  SALARY: 'salary',
  POSITION: 'position',
} as const;

export const FilterState = {
  [FILTER_KEY.SALARY]: { text: salary[0].text },
  [FILTER_KEY.POSITION]: { text: position[0].text },
};

export const filterState = atom<typeof FilterState>({
  key: FILTER,
  default: FilterState,
});
