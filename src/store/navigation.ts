import { atom } from 'recoil';

const NAVIGATION = 'navigation';

export const NavState = {
  NAVIGATION: false,
};

export const navState = atom<typeof NavState>({
  key: NAVIGATION,
  default: NavState,
});
