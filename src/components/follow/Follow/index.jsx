import React from 'react';
import { XSmallButton } from '../../common/Button';
import * as S from './style';

export function Follow() {
  return (
    <S.Container>
      <S.ProfileImg />
      <S.UserInfo>
        <S.UserName>유저 이름</S.UserName>
        <S.UserIntro>유저 소개</S.UserIntro>
      </S.UserInfo>
      <XSmallButton />
    </S.Container>
  );
}
