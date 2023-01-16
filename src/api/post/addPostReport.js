import { axiosPrivate } from '../apiController';

export async function addPostReport(postId) {
  try {
    const {
      data: { report },
    } = await axiosPrivate.post(`/post/${postId}/report`);

    return report;
  } catch (e) {
    console.log(e);
  }
}
