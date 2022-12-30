import React, { useState } from 'react';
import { axiosPrivate } from '../../../api/apiController';
import { XSmallButton } from '../../common/Button';
import * as S from './style';
import basicProfile from '../../../assets/images/basic-profile-img.png';

export function Follow({ accountname, username, intro, image, isfollow }) {
  const [isFollowed, setIsFollowed] = useState(isfollow);
  const myAccountName = JSON.parse(localStorage.getItem('accountname'));
  const url = `/profile/${accountname}`;
  const BASIC_PROFILE_URL = `${process.env.REACT_APP_SERVER_URL}/Ellipse.png`;

  const changeFollow = async () => {
    if (isFollowed) {
      await axiosPrivate.delete(`/profile/${accountname}/unfollow`);

      setIsFollowed(false);
    } else {
      await axiosPrivate.post(`/profile/${accountname}/follow`);

      setIsFollowed(true);
    }
  };

  const renderProfileImage = () => {
    let profileImage = basicProfile;

    if (image !== BASIC_PROFILE_URL) profileImage = image;

    return <S.ProfileImg src={profileImage} />;
  };

  return (
    <S.Container>
      <S.ProfileLink to={url}>
        {renderProfileImage()}
        <S.UserInfo>
          <S.UserName>{username}</S.UserName>
          <S.UserIntro>{intro}</S.UserIntro>
        </S.UserInfo>
      </S.ProfileLink>
      {myAccountName === accountname ? null : <XSmallButton changeFollow={changeFollow} isFollowed={isFollowed} />}
    </S.Container>
  );
}
