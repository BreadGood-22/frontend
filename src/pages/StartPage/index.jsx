import React from 'react';
import * as S from './style';
import logo from '../../assets/images/symbol-logo.png';
import { LoginButtons } from '../../components';

export function StartPage() {
  return (
    <S.Container>
      <h2 className='sr-only'>빵굿빵굿 시작페이지</h2>
      <S.Logo src={logo} />
      <LoginButtons />
    </S.Container>
  );
}
