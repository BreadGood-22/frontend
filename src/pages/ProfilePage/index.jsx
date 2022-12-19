import React from 'react';
import { UserInfoContainer, ProductsContainer, PostsContainer, HeaderBasic } from '../../components';
import * as S from './style';

export function ProfilePage() {
  return (
    <S.Container>
      <HeaderBasic />
      <UserInfoContainer />
      <ProductsContainer />
      <PostsContainer />
    </S.Container>
  );
}
