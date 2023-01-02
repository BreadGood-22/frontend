import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { Post } from '../Post';

export function PostList({ posts, setIsVisibleModal, setPostId }) {
  const postListCont = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!postListCont.current) return;
    setHeight(postListCont.current.getBoundingClientRect().bottom);
  }, [posts]);

  return (
    <S.Container ref={postListCont} height={height}>
      {posts.map((data) => (
        <Post key={data.id} data={data} setIsVisibleModal={setIsVisibleModal} setPostId={setPostId} />
      ))}
    </S.Container>
  );
}
