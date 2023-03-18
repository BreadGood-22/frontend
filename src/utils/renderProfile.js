import basicProfile from '../assets/images/basic-profile-img.png';

export function renderProfile(userProfileImage) {
  let profileImage = basicProfile;

  if (userProfileImage !== 'https://mandarin.api.weniv.co.kr/1673585016866.png') profileImage = userProfileImage;

  return profileImage;
}
