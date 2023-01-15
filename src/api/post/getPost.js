import { axiosPrivate } from '../apiController';

export async function getPost(postId) {
  try {
    const {
      data: { post },
    } = await axiosPrivate.get(`/post/${postId}`);

    return post;
  } catch (e) {
    console.log(e);
  }
}
