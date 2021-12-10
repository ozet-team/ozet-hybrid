import { atom } from 'recoil';

const MODAL = 'Modal';
export const MODAL_KEY = {
  SALARY: 'salary',
  POSITION: 'position',
} as const;

export const ModalState = {
  [MODAL_KEY.POSITION]: false,
  [MODAL_KEY.SALARY]: false,
};

export const modalState = atom<typeof ModalState>({
  key: MODAL,
  default: ModalState,
});
