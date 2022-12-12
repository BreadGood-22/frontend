import { Outlet } from 'react-router-dom';
import React from 'react';
import * as S from './style';

function Layout() {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
}

export { Layout };
