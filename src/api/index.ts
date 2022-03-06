import axios, { Axios } from 'axios';
import { nativeInfo } from 'src/utils/storage';
import { recruitmentDetailData } from './recruitmentDetailData';
import {
  BookmarkDataResponse,
  ListItemType,
  recruitmentDetailDataType,
} from './types';

export class GuestBookApi {
  private API: string;
  constructor() {
    this.API = 'https://api-staging.ozet.app/api/v1';
  }

  getAnnouncements = (url: string) => {
    console.log(url);
    return axios.get<ListItemType[]>(`${this.API}${url}`);
  };

  getAddress = (url: string) => {
    return axios.get<{ id: number; name: string }[]>(`${this.API}${url}`);
  };

  getRecruitmentDetailData = (url: string) => {
    return axios.get<recruitmentDetailDataType>(
      `${this.API}/announcement/announcements/${url}`,
    );
  };
  postBookMark = (payload: { announcementId: string }) => {
    return axios.post<typeof recruitmentDetailData>(
      `${this.API}/announcement/bookmarks/`,
      payload,
      {
        headers: {
          Authorization: `JWT ${nativeInfo.getData().accessToken}`,
        },
      },
    );
  };
  getBookMark = () => {
    return axios.get<BookmarkDataResponse[]>(
      `${this.API}/announcement/bookmarks`,
      {
        headers: {
          Authorization: `JWT ${nativeInfo.getData().accessToken}`,
        },
      },
    );
  };
  deleteBookMark = (id: string) => {
    return axios.delete<typeof recruitmentDetailData>(
      `${this.API}/announcement/bookmarks/${id}`,
      {
        headers: {
          Authorization: `JWT ${nativeInfo.getData().accessToken}`,
        },
      },
    );
  };
  getJWT = (payload: { user_id: string }) => {
    return axios
      .post<{ token: string }>(
        `${this.API}/member/auth/passcode/pass/`,
        payload,
      )
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
      });
  };
}

export default new GuestBookApi();
