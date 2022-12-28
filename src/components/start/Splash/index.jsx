import React from 'react';
import * as S from './style';

export function Splash() {
  return (
    <S.Container>
      <h2 className='sr-only'>빵굿빵굿 로딩중</h2>
      <S.Logo />
    </S.Container>
  );
}
