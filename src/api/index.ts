import axios from 'axios';
import { sessionList } from './mock';

export class GuestBookApi {
  private API: string;
  constructor() {
    this.API = 'https://api-staging.ozet.app/api/v1';
  }

  getAnnouncements = () => {
    return axios.get(`${this.API}/announcement/announcements/`);
  };
}

export default new GuestBookApi();
