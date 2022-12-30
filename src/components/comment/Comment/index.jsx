import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import { timeForToday } from '../../../utils/timeForToday';

export function Comment({ comment, setIsVisibleModal, setIsMyComment, setCommentId }) {
  const accountname = JSON.parse(localStorage.getItem('accountname'));
  const userURL = `/profile/${comment.author.accountname}`;

  const handleMoreBtn = (commentId) => {
    setIsVisibleModal(true);
    setCommentId(commentId);
    if (!setIsMyComment) return;
    if (comment.author.accountname === accountname) {
      setIsMyComment(true);
    } else {
      setIsMyComment(false);
    }
  };

  return (
    <S.CommentItem>
      <S.AuthorInfo>
        <h4 className='sr-only'>게시글 작성자 정보</h4>
        <Link to={userURL}>
          <S.ProfileImg src={comment.author.image} />
        </Link>
        <S.TextContainer>
          <Link to={userURL}>
            <S.UserName>{comment.author.username}</S.UserName>
          </Link>
          <S.Time>{timeForToday(comment.createdAt)}</S.Time>
        </S.TextContainer>
      </S.AuthorInfo>
      <S.PostInfo>
        <h4 className='sr-only'>댓글 정보</h4>
        <S.Content>{comment.content}</S.Content>
      </S.PostInfo>
      <S.MoreButton onClick={() => handleMoreBtn(comment.id)}>
        <span className='sr-only'>더보기 버튼</span>
      </S.MoreButton>
    </S.CommentItem>
  );
}
