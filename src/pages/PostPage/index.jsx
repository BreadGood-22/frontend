import React, { useState } from 'react';
import { HeaderBasic, HeaderBasicModal, MyPostModal, Post, Comment } from '../../components';
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
    {
      id: '62c83d6a23b7e292a5907634',
      content: '맛있어보여요',
      createdAt: '2022-07-08T14:21:30.263Z',
      author: {
        _id: '62c780a623b7e292a59069ed',
        username: '알리바배비훈훈',
        accountname: 'hoondol123',
        intro: '좋은 것만 드려요',
        image: 'http://146.56.183.55:5050/Ellipse.png',
        isfollow: false,
        following: [],
        follower: ['62c780ad23b7e292a59069f2', '62c780af23b7e292a59069f7'],
        followerCount: 2,
        followingCount: 0,
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

      {isVisibleModal && <HeaderBasicModal setIsVisibleModal={setIsVisibleModal} />}
      {isVisibleModal && <MyPostModal setIsVisibleModal={setIsVisibleModal} />}
    </>
  );
}
