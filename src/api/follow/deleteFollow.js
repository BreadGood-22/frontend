import { axiosPrivate } from '../apiController';

export async function deleteFollow(accountname) {
  try {
    const {
      data: { profile },
    } = await axiosPrivate.delete(`/profile/${accountname}/unfollow`);

    return profile;
  } catch (e) {
    console.log(e);
  }
}
