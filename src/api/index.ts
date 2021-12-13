import axios from 'axios';
import { sessionList } from './mock';
import { recruitmentDetail } from './types';

export class GuestBookApi {
  private API: string;
  constructor() {
    this.API = 'https://api-staging.ozet.app/api/v1';
  }

  getAnnouncements = () => {
    return axios.get(`${this.API}/announcement/announcements/`);
  };

  getRecruitmentDetailData = (id: number) => {
    return axios.get<recruitmentDetail>(`${this.API}/recruitment/${id}`);
  };
}

export default new GuestBookApi();
