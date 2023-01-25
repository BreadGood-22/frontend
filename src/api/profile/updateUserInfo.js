import { axiosPrivate } from '../apiController';

export async function updateUserInfo(username, accountname, intro, image) {
  try {
    const { data } = await axiosPrivate.put('/user', {
      user: {
        username,
        accountname,
        intro,
        image,
      },
    });

    return data;
  } catch (e) {
    console.log(e);
  }
}
