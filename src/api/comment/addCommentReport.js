import { axiosPrivate } from '../apiController';

export async function addCommentReport(postId, commentId) {
  try {
    const {
      data: { report },
    } = await axiosPrivate.post(`/post/${postId}/comments/${commentId}/report`);

    return report;
  } catch (e) {
    console.log(e);
  }
}
