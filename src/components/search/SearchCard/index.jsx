import React from 'react';
import * as S from './style';
import basicProfile from '../../../assets/images/basic-profile-img.png';

export function SearchCard({ info }) {
  const BASIC_PROFILE_URL = `${process.env.REACT_APP_SERVER_URL}/Ellipse.png`;

  const renderProfileImage = () => {
    let profileImage = basicProfile;

    if (info.image !== BASIC_PROFILE_URL) profileImage = info.image;

    return <S.ProfileImg src={profileImage} />;
  };

  return (
    <li>
      <S.StyledLink>
        {renderProfileImage()}
        <S.UserInfo>
          <S.UserName>{info.username}</S.UserName>
          <S.AccountName>@ {info.accountname}</S.AccountName>
        </S.UserInfo>
      </S.StyledLink>
    </li>
  );
}
