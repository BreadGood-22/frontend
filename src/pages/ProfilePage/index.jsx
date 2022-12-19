import React from 'react';
import { UserInfoContainer, ProductsContainer, PostsContainer } from '../../components';
import * as S from './style';

export function ProfilePage() {
  return (
    <S.Container>
      <UserInfoContainer />
      <ProductsContainer />
      <PostsContainer />
    </S.Container>
  );
}
