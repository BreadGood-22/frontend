import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import { LikeButton } from '../LikeButton';
import basicProfile from '../../../assets/images/basic-profile-img.png';
import { BASE_URL } from '../../../api/apiController';

export function Post({ data, setIsVisibleModal, setPostId, setIsMyPost }) {
  const accountname = JSON.parse(localStorage.getItem('accountname'));
  const userURL = `/profile/${data.author.accountname}`;

  const handleMoreBtn = (postId) => {
    setIsVisibleModal(true);
    setPostId(postId);

    if (!setIsMyPost) return;
    if (data.author.accountname === accountname) {
      setIsMyPost(true);
      setPostId(postId);
    } else {
      setIsMyPost(false);
    }
  };

  const renderProfileImage = () => {
    let profileImage = basicProfile;

    if (data.author.image !== `${BASE_URL}/Ellipse.png`) profileImage = data.author.image;

    return <S.ProfileImg src={profileImage} />;
  };

  return (
    <S.Post key={data.id}>
      <h3 className='sr-only'>게시글</h3>
      <Link to={userURL}>
        <S.AuthorInfo>
          <h4 className='sr-only'>게시글 작성자 정보</h4>
          {renderProfileImage()}
          <S.TextContainer>
            <S.UserName>{data.author.username}</S.UserName>
            <S.AccountName>@{data.author.accountname}</S.AccountName>
          </S.TextContainer>
        </S.AuthorInfo>
      </Link>
      <S.PostInfo>
        <h4 className='sr-only'>게시글 정보</h4>
        <S.Content>{data.content}</S.Content>
        {data.image && <S.Img src={data.image.split(',')[0]} />}
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
