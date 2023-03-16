import basicProfile from '../assets/images/basic-profile-img.png';
import { BASE_URL } from '../api/apiController';

export function renderProfile(userProfileImage) {
  let profileImage = basicProfile;

  if (userProfileImage !== `${BASE_URL}/Ellipse.png`) profileImage = userProfileImage;

  return profileImage;
}
