import { axiosPrivate } from '../apiController';

export async function getUserInfo(accountname) {
  try {
    const {
      data: { profile },
    } = await axiosPrivate.get(`/profile/${accountname}`);

    return profile;
  } catch (e) {
    console.log(e);
  }
}
