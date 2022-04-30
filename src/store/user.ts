import { atom, selector } from 'recoil';
import API from '../api/index';

const USER = 'user';
const USER_SELECTOR = 'userSelector';

export const UserState = {
  name: '',
  email: '',
  phoneNumber: '',
};

export const userState = atom<typeof UserState>({
  key: USER,
  default: UserState,
});
export const userSelector = selector({
  key: USER_SELECTOR,
  get: async () => {
    const res = await API.getUserMe();
    return res.data;
  },
  set: ({ set }, newValue) => {
    set(userState, newValue);
  },
});
