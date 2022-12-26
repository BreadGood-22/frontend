import React from 'react';
import { XSmallButton } from '../../common/Button';
import * as S from './style';

export function Follow({ username, intro, image, isfollow }) {
  return (
    <S.Container>
      <S.ProfileImg src={image} />
      <S.UserInfo>
        <S.UserName>{username}</S.UserName>
        <S.UserIntro>{intro}</S.UserIntro>
      </S.UserInfo>
      <XSmallButton isFollowed={isfollow} />
    </S.Container>
  );
}
