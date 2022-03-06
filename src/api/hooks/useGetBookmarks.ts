import useSWR from 'swr';
import Api from '../index';

async function getBookmarks() {
  const res = await Api.getBookMark();
  return res.data;
}

export function useGetBookmarks() {
  const { data, error } = useSWR([`/announcement/bookmarks`], getBookmarks);
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
