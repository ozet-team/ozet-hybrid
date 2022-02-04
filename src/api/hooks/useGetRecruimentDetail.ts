import useSWR from 'swr';
import Api from '../index';
import { recruitmentDetailData } from '../recruitmentDetailData';

async function getRecruitmentDetail(id: string) {
  const res = await Api.getRecruitmentDetailData(id);
  return res.data;
}

export function useGetRecruitmentDetail() {
  const { data, error } = useSWR<typeof recruitmentDetailData>(
    [`/recruitment`],
    getRecruitmentDetail,
  );
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
