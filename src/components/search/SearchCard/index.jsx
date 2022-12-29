import React from 'react';
import * as S from './style';
import basicProfile from '../../../assets/images/basic-profile-img.png';

export function SearchCard() {
  return (
    <li>
      <S.StyledLink>
        <S.ProfileImg src={basicProfile} />
        <S.UserInfo>
          <S.UserName>애월읍 위니브 감귤농장</S.UserName>
          <S.AccountName>@accountname</S.AccountName>
        </S.UserInfo>
      </S.StyledLink>
    </li>
  );
}
