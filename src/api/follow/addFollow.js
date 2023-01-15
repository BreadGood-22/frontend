import { axiosPrivate } from '../apiController';

export async function addFollow({ accountname }) {
  try {
    const { data } = await axiosPrivate.post(`/profile/${accountname}/follow`);

    return data.message;
  } catch (e) {
    console.log(e);
  }
}
