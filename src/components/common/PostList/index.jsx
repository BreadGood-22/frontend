import React from 'react';
import * as S from './style';

export function PostList({ posts }) {
  return (
    <S.Container>
      {posts.map((data) => (
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
            <S.Img src={data.image} />
            <S.LikeComment>
              <S.LikeButton isHeart={data.hearted}>
                <span className='sr-only'>좋아요버튼</span>
                <span>{data.heartCount}</span>
              </S.LikeButton>
              <S.StyledLink to=''>
                <span className='sr-only'>댓글 남기기</span>
                <span>{data.commentCount}</span>
              </S.StyledLink>
            </S.LikeComment>
            <S.Date>{new Intl.DateTimeFormat('ko', { dateStyle: 'long' }).format(new Date(data.updatedAt))}</S.Date>
          </S.PostInfo>
          <S.MoreButton>
            <span className='sr-only'>더보기 버튼</span>
          </S.MoreButton>
        </S.Post>
      ))}
    </S.Container>
  );
}
