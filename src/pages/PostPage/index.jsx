import React, { useState } from 'react';
import { HeaderBasic, HeaderBasicModal, MyPostModal, Post } from '../../components';
import * as S from './style';

export function PostPage() {
  const [postId, setPostId] = useState('');
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  console.log(postId);
  return (
    <>
      <HeaderBasic setIsVisibleModal={setIsVisibleModal} />
      <S.Container>
        <Post setIsVisibleModal={setIsVisibleModal} setPostId={setPostId} />
      </S.Container>

      {isVisibleModal && <HeaderBasicModal setIsVisibleModal={setIsVisibleModal} />}
      {isVisibleModal && <MyPostModal setIsVisibleModal={setIsVisibleModal} />}
    </>
  );
}
