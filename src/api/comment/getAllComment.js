import { axiosPrivate } from '../apiController';

export async function getAllComment(id, page = 0) {
  try {
    const {
      data: { comments },
    } = await axiosPrivate.get(`/post/${id}/comments/?limit=10&skip=${page * 10}`);

    return comments;
  } catch (e) {
    console.log(e);
  }
}
