import React from 'react';
import Logo from '../../../assets/images/symbol-logo.webp';

import * as S from './style';

export function Loading() {
  return (
    <S.Container>
      <S.Image src={Logo} alt='빵굿이' />
      <S.Text>로딩중...</S.Text>
    </S.Container>
  );
}
