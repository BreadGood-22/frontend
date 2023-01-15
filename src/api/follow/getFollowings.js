import { axiosPrivate } from '../apiController';

export async function getFollowings({ accountname }) {
  try {
    const { data } = await axiosPrivate.get(`/profile/${accountname}/following/?limit=0`);

    return { data };
  } catch (e) {
    console.log(e);
  }
}
