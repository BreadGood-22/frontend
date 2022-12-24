import React, { useState } from 'react';
import * as S from './style';
import { Post, MyPostModal, OthersPostCommentModal } from '../../../components';

export function PostContainer({ postId, setPostId, post, getUserPost }) {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isMyPost, setIsMyPost] = useState(false);

  return (
    <>
      {post && (
        <S.Container>
          <Post setIsVisibleModal={setIsVisibleModal} setPostId={setPostId} data={post} setIsMyPost={setIsMyPost} />
        </S.Container>
      )}
      {isVisibleModal &&
        (isMyPost ? (
          <MyPostModal
            setIsVisibleModal={setIsVisibleModal}
            getUserPost={getUserPost}
            postId={postId}
            setIsMyPost={setIsMyPost}
          />
        ) : (
          <OthersPostCommentModal setIsVisibleModal={setIsVisibleModal} postId={postId} />
        ))}
    </>
  );
}
