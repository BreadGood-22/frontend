import { axiosPrivate } from '../apiController';

export async function addPost(text, images) {
  try {
    const { data } = await axiosPrivate.post('/post', {
      post: {
        content: text,
        image: images,
      },
    });

    return data.message;
  } catch (e) {
    console.log(e);
  }
}
