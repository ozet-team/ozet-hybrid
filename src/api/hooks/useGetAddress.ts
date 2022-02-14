import useSWR from 'swr';
import Api from '../index';

async function getCities(url: string) {
  const res = await Api.getAddress(url);
  return res.data;
}

export function useGetCities() {
  const { data, error } = useSWR([`/address/cities`], getCities);
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}

async function getCountries(url: string) {
  const res = await Api.getAddress(url);
  return res.data;
}

export function useGetCountries(id: number | string) {
  const { data, error } = useSWR(
    [`/address/countries/?city_id=${id}`],
    getCountries,
  );
  return {
    data: data && data,
    error,
    loading: !error && !data,
  };
}
