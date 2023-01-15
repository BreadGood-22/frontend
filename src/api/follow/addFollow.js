import { axiosPrivate } from '../apiController';

export async function addFollow(accountname) {
  try {
    await axiosPrivate.post(`/profile/${accountname}/follow`);
  } catch (e) {
    console.log(e);
  }
}
