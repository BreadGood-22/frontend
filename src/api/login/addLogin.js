import axios from '../apiController';

export async function addLogin(inputs) {
  try {
    const { data } = await axios.post('/user/login', {
      user: inputs,
    });

    return data;
  } catch (e) {
    console.log(e);
  }
}
