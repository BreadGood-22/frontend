import { axiosPrivate } from '../apiController';

export async function updatePost(postId, text, images) {
  try {
    const { data } = await axiosPrivate.put(`/post/${postId}`, {
      post: {
        content: text,
        image: images,
      },
    });

    return data;
  } catch (e) {
    console.log(e);
  }
}
