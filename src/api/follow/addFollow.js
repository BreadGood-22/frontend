import { axiosPrivate } from '../apiController';

export async function addFollow(accountname) {
  try {
    const {
      data: { profile },
    } = await axiosPrivate.post(`/profile/${accountname}/follow`);

    return profile;
  } catch (e) {
    console.log(e);
  }
}
