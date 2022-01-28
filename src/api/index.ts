import axios from 'axios';
import { sessionList } from './mock';
import { recruitmentDetailData } from './recruitmentDetailData';
import { ListItemType, recruitmentDetail } from './types';

export class GuestBookApi {
  private API: string;
  constructor() {
    this.API = 'https://api-staging.ozet.app/api/v1';
  }

  getAnnouncements = (url: string) => {
    console.log(url);
    return axios.get<ListItemType[]>(`${this.API}${url}`);
  };

  getRecruitmentDetailData = (id: string) => {
    return axios.get<typeof recruitmentDetailData>(
      `${this.API}/recruitment/detail/${id}`,
    );
  };
  postBookmarks = (payload: { announcementId: 0 }) => {
    return axios.post<typeof recruitmentDetailData>(
      `${this.API}/announcement/bookmarks/`,
      payload,
    );
  };
}

export default new GuestBookApi();
