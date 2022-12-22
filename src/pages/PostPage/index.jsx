import React, { useState } from 'react';
import { HeaderBasic, HeaderBasicModal, MyPostModal, Post, Comment, CommentInput } from '../../components';
import * as S from './style';

export function PostPage() {
  const [postId, setPostId] = useState('');
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const data = [
    {
      id: '62cac9a923b7e292a5908397',
      content: '브레드핏',
      createdAt: '2022-07-10T12:44:25.298Z',
      author: {
        _id: '62c6dc4023b7e292a59065ce',
        username: 'Sam',
        accountname: 'party4me',
        intro: 'get it',
        image: 'http://146.56.183.55:5050/1657711001305.jpg',
        isfollow: false,
        following: ['61ef37bd368570e1514709d5'],
        follower: [],
        followerCount: 0,
        followingCount: 1,
      },
    },
  ];

  return (
    <>
      <HeaderBasic setIsVisibleModal={setIsVisibleModal} />
      <S.Container>
        <Post setIsVisibleModal={setIsVisibleModal} setPostId={setPostId} />
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
