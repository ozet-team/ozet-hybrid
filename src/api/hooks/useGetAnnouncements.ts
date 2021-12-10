import useSWR from 'swr';
import Api from '../index';
import qs from 'query-string';
import { sessionList } from '../mock';

async function getAnnouncements() {
  const res = await Api.getAnnouncements();
  return res.data;
}

export function useGetAnnouncements() {
  const { data, error } = useSWR(
    ['/announcement/announcements'],
    getAnnouncements,
  );
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
