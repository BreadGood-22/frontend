import { axiosPrivate } from '../apiController';

export async function getFollowers({ accountname }) {
  try {
    const { data } = await axiosPrivate.get(`/profile/${accountname}/follower/?limit=0`);

    return { data };
  } catch (e) {
    console.log(e);
  }
}
