import React, { useState } from 'react';
import { UserInfoContainer, ProductsContainer, PostsContainer, HeaderBasic, HeaderBasicModal } from '../../components';
import * as S from './style';

export function ProfilePage() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  return (
    <>
      <S.Container>
        <HeaderBasic setIsVisibleModal={setIsVisibleModal} />
        <UserInfoContainer />
        <ProductsContainer />
        <PostsContainer />
      </S.Container>
      {isVisibleModal && <HeaderBasicModal setIsVisibleModal={setIsVisibleModal} />}
    </>
  );
}
