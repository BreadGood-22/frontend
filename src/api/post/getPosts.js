import { axiosPrivate } from '../apiController';

export async function getPosts(accountname, page = 0) {
  try {
    const {
      data: { post },
    } = await axiosPrivate(`/post/${accountname}/userpost/?limit=10&skip=${page * 10}`);

    return post;
  } catch (e) {
    console.log(e);
  }
}
