import React from 'react';
import * as S from './style';
import { LikeButton } from '../LikeButton';

export function Post({ data1, setIsVisibleModal, setPostId }) {
  const handleMoreBtn = (postId) => {
    console.log(postId);
    setIsVisibleModal(true);
    setPostId(postId);
  };

  const data = {
    id: '63a2a64423b7e292a59735ac',
    content: 'test2',
    createdAt: '2022-12-21T06:23:00.399Z',
    updatedAt: '2022-12-22T00:51:34.996Z',
    hearted: false,
    heartCount: 0,
    comments: ['63a3aa1623b7e292a597452a'],
    commentCount: 1,
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
    <S.Post key={data.id}>
      <h3 className='sr-only'>게시글</h3>

      <S.AuthorInfo>
        <h4 className='sr-only'>게시글 작성자 정보</h4>
        <S.ProfileImg src={data.author.image} />
        <S.TextContainer>
          <S.UserName>{data.author.username}</S.UserName>
          <S.AccountName>@{data.author.accountname}</S.AccountName>
        </S.TextContainer>
      </S.AuthorInfo>
      <S.PostInfo>
        <h4 className='sr-only'>게시글 정보</h4>
        <S.Content>{data.content}</S.Content>
        {data.image && <S.Img src={data.image} />}
        <S.LikeComment>
          <LikeButton hearted={data.hearted} heartCount={data.heartCount} postId={data.id} />
          <S.StyledLink to={`/post/${data.id}`}>
            <span className='sr-only'>댓글 남기기</span>
            <span>{data.commentCount}</span>
          </S.StyledLink>
        </S.LikeComment>
        <S.Date>{new Intl.DateTimeFormat('ko', { dateStyle: 'long' }).format(new Date(data.updatedAt))}</S.Date>
      </S.PostInfo>
      <S.MoreButton onClick={() => handleMoreBtn(data.id)}>
        <span className='sr-only'>더보기 버튼</span>
      </S.MoreButton>
    </S.Post>
  );
}
