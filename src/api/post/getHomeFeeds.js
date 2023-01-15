import { axiosPrivate } from '../apiController';

export async function getHomeFeeds(page) {
  try {
    const {
      data: { posts },
    } = await axiosPrivate.get(`/post/feed/?limit=10&skip=${page * 10}`);

    return posts;
  } catch (e) {
    console.log(e);
  }
}
