import React, { useState } from 'react';
import * as S from './style';
import { Comment, OthersPostCommentModal, MyCommentModal } from '../../../components';
import useHeight from '../../../hooks/useHeight';

export function CommentList({ postId, getComments, comments, post, setPost }) {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isMyComment, setIsMyComment] = useState(false);
  const [commentId, setCommentId] = useState('');

  const [container, height] = useHeight(comments);

  return (
    <>
      <S.CommentList ref={container} height={height}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            setIsVisibleModal={setIsVisibleModal}
            setIsMyComment={setIsMyComment}
            setCommentId={setCommentId}
          />
        ))}
      </S.CommentList>
      {isVisibleModal &&
        (isMyComment ? (
          <MyCommentModal
            setIsVisibleModal={setIsVisibleModal}
            getComments={getComments}
            commentId={commentId}
            postId={postId}
            post={post}
            setPost={setPost}
          />
        ) : (
          <OthersPostCommentModal setIsVisibleModal={setIsVisibleModal} postId={postId} commentId={commentId} />
        ))}
    </>
  );
}
