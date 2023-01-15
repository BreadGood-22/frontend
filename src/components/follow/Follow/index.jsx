import React, { useState } from 'react';
import { BASE_URL } from '../../../api/apiController';
import { XSmallButton } from '../../common/Button';
import * as S from './style';
import basicProfile from '../../../assets/images/basic-profile-img.png';
import { addFollow, deleteFollow } from '../../../api';

export function Follow({ accountname, username, intro, image, isfollow }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isFollowed, setIsFollowed] = useState(isfollow);
  const myAccountName = JSON.parse(localStorage.getItem('accountname'));
  const url = `/profile/${accountname}`;

  const changeFollow = async () => {
    setIsLoading(true);

    if (isFollowed) {
      await deleteFollow(accountname);
      setIsFollowed(false);
    } else {
      await addFollow(accountname);
      setIsFollowed(true);
    }

    setIsLoading(false);
  };

  const renderProfileImage = () => {
    let profileImage = basicProfile;

    if (image !== `${BASE_URL}/Ellipse.png`) profileImage = image;

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
