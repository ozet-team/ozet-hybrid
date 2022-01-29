import axios from 'axios';
import { sessionList } from './mock';
import { recruitmentDetailData } from './recruitmentDetailData';
import { getBookmarkDataType, ListItemType, recruitmentDetail } from './types';

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
  postBookMark = (payload: { announcementId: string }) => {
    return axios.post<typeof recruitmentDetailData>(
      `${this.API}/announcement/bookmarks/`,
      payload,
      {
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwtToken')}`,
        },
      },
    );
  };
  getBookMark = () => {
    return axios.get<getBookmarkDataType>(
      `${this.API}/announcement/bookmarks/`,
      {
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwtToken')}`,
        },
      },
    );
  };
  deleteBookMark = (id: string) => {
    return axios.delete<typeof recruitmentDetailData>(
      `${this.API}/announcement/bookmarks/${id}`,
      {
        headers: {
          Authorization: `JWT ${localStorage.getItem('jwtToken')}`,
        },
      },
    );
  };
}

export default new GuestBookApi();
