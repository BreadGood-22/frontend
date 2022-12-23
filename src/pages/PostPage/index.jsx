import React, { useState } from 'react';
import { HeaderBasic, HeaderBasicModal, MyPostModal, Post, Comment, CommentInput } from '../../components';
import * as S from './style';

export function PostPage() {
  const [postId, setPostId] = useState('');
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const data = {
    id: '63a5380d23b7e292a5976f4a',
    content: '테스트',
    image: 'http://146.56.183.55:5050/1671772168118.png',
    createdAt: '2022-12-23T05:09:33.614Z',
    updatedAt: '2022-12-23T05:09:33.614Z',
    hearted: false,
    heartCount: 0,
    comments: [],
    commentCount: 0,
    author: {
      _id: '639eaaaf23b7e292a596b91d',
      username: 'breadgood',
      accountname: 'breadgood',
      intro: '빵굿빵굿',
      image: 'http://146.56.183.55:5050/1671604441884.png',
      isfollow: false,
      following: ['61ef2a93368570e1514706dc'],
      follower: [],
      followerCount: 0,
      followingCount: 1,
    },
  };

  return (
    <>
      <HeaderBasic setIsVisibleModal={setIsVisibleModal} />
      <S.Container>
        <Post setIsVisibleModal={setIsVisibleModal} setPostId={setPostId} data={data} />
      </S.Container>
      <S.CommentList>
        {!!data.length && data.map((comment) => <Comment key={comment.id} comment={comment} />)}
      </S.CommentList>
      <CommentInput />
      {isVisibleModal && <HeaderBasicModal setIsVisibleModal={setIsVisibleModal} />}
      {isVisibleModal && <MyPostModal setIsVisibleModal={setIsVisibleModal} />}
    </>
  );
}
