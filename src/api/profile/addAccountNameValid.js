import axios from '../apiController';

export async function addAccountNameValid(e) {
  try {
    const { data } = await axios.post('/user/accountnamevalid', {
      user: {
        accountname: e.target.value,
      },
    });

    return data.message;
  } catch (e) {
    console.log(e);
  }
}
