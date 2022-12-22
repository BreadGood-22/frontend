import React from 'react';
import * as S from './style';
import { Post } from '../Post';

export function PostList({ posts, setIsVisibleModal, setPostId }) {
  return (
    <S.Container>
      {posts.map((data) => (
        <Post key={data.id} data={data} setIsVisibleModal={setIsVisibleModal} setPostId={setPostId} />
      ))}
    </S.Container>
  );
}
