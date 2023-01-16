import { axiosPrivate } from '../apiController';

export async function getSearchResult(debouncedValue) {
  try {
    const { data } = await axiosPrivate.get(`/user/searchuser/?keyword=${debouncedValue}`);

    return data;
  } catch (e) {
    console.error(e);
  }
}
