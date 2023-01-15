import { axiosPrivate } from '../apiController';

export async function getUserPost({ postId }) {
  try {
    const {
      data: {
        post: { content, image },
      },
    } = await axiosPrivate.get(`/post/${postId}`);

    return { content, image };
  } catch (e) {
    console.log(e);
  }
}
