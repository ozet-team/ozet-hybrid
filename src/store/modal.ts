import { atom } from 'recoil';

const MODAL = 'Modal';
export const MODAL_KEY = {
  SALARY: 'salary',
  POSITION: 'position',
  CITY: 'city',
  COUNTRY: 'country',
} as const;

export const ModalState = {
  [MODAL_KEY.POSITION]: false,
  [MODAL_KEY.SALARY]: false,
  [MODAL_KEY.CITY]: false,
  [MODAL_KEY.COUNTRY]: false,
};

export const modalState = atom<typeof ModalState>({
  key: MODAL,
  default: ModalState,
});
