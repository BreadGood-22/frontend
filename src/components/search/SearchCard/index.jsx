import React from 'react';
import * as S from './style';
import { renderProfile } from '../../../utils/renderProfile';

export function SearchCard({ info }) {
  const profileImage = renderProfile(info.image);

  return (
    <li>
      <S.StyledLink to={`/profile/${info.accountname}`}>
        <S.ProfileImg src={profileImage} />
        <S.UserInfo>
          <S.UserName>{info.username}</S.UserName>
          <S.AccountName>@ {info.accountname}</S.AccountName>
        </S.UserInfo>
      </S.StyledLink>
    </li>
  );
}
