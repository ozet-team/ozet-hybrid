import axios from 'axios';
import { sessionList } from './mock';
import { recruitmentDetail } from './types';

export class OzetApi {
  private API: string;
  constructor() {
    this.API = 'url';
  }

  getSessions = (url: string) => {
    return axios.get<typeof sessionList>(`${this.API}/${url}`);
  };

  getRecruitmentDetailData = (id: number) => {
    return axios.get<recruitmentDetail>(`${this.API}/recruitment/${id}`);
  };
}

export default new OzetApi();
