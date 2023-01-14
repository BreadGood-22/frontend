import axios from '../apiController';

export async function addUserInfo({ email, password, username, accountname, intro, image }) {
  try {
    const { data } = await axios.post('/user', {
      user: {
        email,
        password,
        username,
        accountname,
        intro,
        image,
      },
    });

    return data.message;
  } catch (e) {
    console.log(e);
  }
}
