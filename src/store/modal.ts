import { atom } from 'recoil';

const MODAL = 'Modal';
export const MODAL_KEY = {
  NORMAL: 'normal',
} as const;

export const ModalState = {
  [MODAL_KEY.NORMAL]: false,
};

export const modalState = atom<typeof ModalState>({
  key: MODAL,
  default: ModalState,
});
