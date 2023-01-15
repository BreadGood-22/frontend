import { axiosPrivate } from '../apiController';

export async function updatePost(postId, text, images) {
  try {
    await axiosPrivate.put(`/post/${postId}`, {
      post: {
        content: text,
        image: images,
      },
    });
  } catch (e) {
    console.log(e);
  }
}
