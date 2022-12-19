import React from 'react';
import { UserInfoContainer, ProductsContainer } from '../../components';
import * as S from './style';

export function ProfilePage() {
  return (
    <S.Container>
      <UserInfoContainer />
      <ProductsContainer />
    </S.Container>
  );
}
