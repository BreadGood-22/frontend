import React, { useState, useEffect } from 'react';
import * as S from './style';
import logo from '../../assets/images/symbol-logo.png';
import { LoginButtons, Splash } from '../../components';

export function StartPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Splash />
      ) : (
        <S.Container>
          <h2 className='sr-only'>빵굿빵굿 시작페이지</h2>
          <S.Logo src={logo} alt='빵굿빵굿' />
          <LoginButtons />
        </S.Container>
      )}
    </>
  );
}
