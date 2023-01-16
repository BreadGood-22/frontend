import { axiosPrivate } from '../apiController';

export async function deletePost(postId) {
  try {
    const { data } = await axiosPrivate.delete(`/post/${postId}`);

    return data;
  } catch (e) {
    console.log(e);
  }
}
