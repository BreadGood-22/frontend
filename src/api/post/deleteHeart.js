import { axiosPrivate } from '../apiController';

export async function deleteHeart(postId) {
  try {
    const {
      data: { post },
    } = await axiosPrivate.delete(`/post/${postId}/unheart`);

    return post;
  } catch (e) {
    console.log(e);
  }
}
