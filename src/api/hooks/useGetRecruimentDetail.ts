import useSWR from 'swr';
import Api from '../index';
import { recruitmentDetail } from '../types';

async function getRecruitmentDetail(id: number) {
  const res = await Api.getRecruitmentDetailData(id);
  return res.data;
}

export function useGetRecruitmentDetail() {
  const { data, error } = useSWR<recruitmentDetail>(
    [`/recruitment`],
    getRecruitmentDetail,
  );
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
