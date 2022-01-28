import useSWR from 'swr';
import Api from '../index';
import { FilterState } from 'src/store/filter';

async function getAnnouncements(url: string) {
  const res = await Api.getAnnouncements(url);
  return res.data;
}

export function useGetAnnouncements({ salary }: typeof FilterState) {
  const { data, error } = useSWR(
    [`/announcement/announcements/?pay_types=${salary.type}`],
    getAnnouncements,
  );
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
