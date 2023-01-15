import { axiosPrivate } from '../apiController';

export async function addHeart(postId) {
  try {
    const {
      data: { post },
    } = await axiosPrivate.post(`/post/${postId}/heart`);

    return post;
  } catch (e) {
    console.log(e);
  }
}
