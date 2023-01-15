import { axiosPrivate } from '../apiController';

export async function getUserInfo({ accountname }) {
  try {
    const {
      data: {
        profile: {
          _id,
          username,
          accountname: _accountname,
          intro,
          followerCount,
          followingCount,
          image,
          isfollow,
          following,
          follower,
        },
      },
    } = await axiosPrivate.get(`/profile/${accountname}`);

    return {
      _id,
      username,
      accountname: _accountname,
      intro,
      followerCount,
      followingCount,
      image,
      isfollow,
      following,
      follower,
    };
  } catch (e) {
    console.log(e);
  }
}
