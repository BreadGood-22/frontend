import React, { useState, useEffect } from 'react';
import * as S from './style';
import { axiosPrivate } from '../../../api/apiController';

export function CommentInput({ getComments, post, setPost, postId }) {
  const [input, setInput] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleUpload = async () => {
    const {
      data: { comment },
    } = await axiosPrivate.post(`/post/${postId}/comments`, {
      comment: {
        content: input,
      },
    });

    setPost((prev) => ({ ...prev, commentCount: ++post.commentCount }));
    getComments();
  };

  useEffect(() => {
    if (input) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [input]);

  return (
    <S.Container>
      <S.ProfileImage />
      <S.Input onChange={(e) => setInput(e.target.value)} />
      <S.Button disabled={isDisabled} onClick={handleUpload}>
        게시
      </S.Button>
    </S.Container>
  );
}
