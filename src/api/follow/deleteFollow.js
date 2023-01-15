import { axiosPrivate } from '../apiController';

export async function deleteFollow(accountname) {
  try {
    const { data } = await axiosPrivate.delete(`/profile/${accountname}/unfollow`);

    return data.message;
  } catch (e) {
    console.log(e);
  }
}
