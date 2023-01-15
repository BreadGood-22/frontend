import { axiosPrivate } from '../apiController';

export async function deleteComment(postId, commentId) {
  try {
    const { data } = await axiosPrivate.delete(`/post/${postId}/comments/${commentId}`);

    return data;
  } catch (e) {
    console.log(e);
  }
}
