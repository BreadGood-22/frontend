import React from 'react';
import { XSmallButton } from '../../common/Button';
import * as S from './style';

export function Follow({ accountname, username, intro, image, isfollow }) {
  const url = `/profile/${accountname}`;

  return (
    <S.Container>
      <S.ProfileLink to={url}>
        <S.ProfileImg src={image} />
        <S.UserInfo>
          <S.UserName>{username}</S.UserName>
          <S.UserIntro>{intro}</S.UserIntro>
        </S.UserInfo>
      </S.ProfileLink>
      <XSmallButton isFollowed={isfollow} />
    </S.Container>
  );
}
