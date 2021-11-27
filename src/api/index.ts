import axios from 'axios';
import { sessionList } from './mock';

export class GuestBookApi {
  private API: string;
  constructor() {
    this.API = 'https://devksanbal.site';
  }

  getSessions = (url: string) => {
    return axios.get<typeof sessionList>(`${this.API}/${url}`);
  };
}

export default new GuestBookApi();
