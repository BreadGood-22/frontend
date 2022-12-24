import React from 'react';
import * as S from './style';
import { timeForToday } from '../../../utils/timeForToday';

export function Comment({ comment, setIsVisibleModal, setIsMyComment, setCommentId }) {
  const accountname = JSON.parse(localStorage.getItem('accountname'));

  const handleMoreBtn = (commentId) => {
    setIsVisibleModal(true);

    if (!setIsMyComment) return;
    if (comment.author.accountname === accountname) {
      setIsMyComment(true);
      setCommentId(commentId);
    } else {
      setIsMyComment(false);
    }
  };

  return (
    <S.CommentItem>
      <S.AuthorInfo>
        <h4 className='sr-only'>게시글 작성자 정보</h4>
        <S.ProfileImg src={comment.author.image} />
        <S.TextContainer>
          <S.UserName>{comment.author.username}</S.UserName>
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
