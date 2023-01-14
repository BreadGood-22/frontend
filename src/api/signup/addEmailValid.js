import axios from '../apiController';

export async function addEmailValid(email) {
  try {
    const { data } = await axios.post('/user/emailvalid', {
      user: {
        email,
      },
    });

    return data.message;
  } catch (e) {
    console.log(e);
  }
}
