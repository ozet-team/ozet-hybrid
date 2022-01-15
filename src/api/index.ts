import axios from 'axios';
import { sessionList } from './mock';
import { recruitmentDetailData } from './recruitmentDetailData';
import { ListItemType, recruitmentDetail } from './types';

export class GuestBookApi {
  private API: string;
  constructor() {
    this.API = 'https://api-staging.ozet.app/api/v1';
  }

  getAnnouncements = () => {
    return axios.get<ListItemType[]>(`${this.API}/announcement/announcements/`);
  };

  getRecruitmentDetailData = (id: string) => {
    return axios.get<typeof recruitmentDetailData>(
      `${this.API}/recruitment/detail/${id}`,
    );
  };
}

export default new GuestBookApi();
