import useSWR from 'swr';
import Api from '../index';
import { recruitmentDetailDataType } from '../types';

async function getRecruitmentDetail(id: string) {
  const res = await Api.getRecruitmentDetailData(id);
  return res.data;
}

export function useGetRecruitmentDetail(id: string) {
  const { data, error } = useSWR<recruitmentDetailDataType>(
    [id],
    getRecruitmentDetail,
  );
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
