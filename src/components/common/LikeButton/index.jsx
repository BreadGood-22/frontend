import React, { useState } from 'react';
import * as S from './style';
import { axiosPrivate } from '../../../api/apiController';

export function LikeButton({ hearted, heartCount, postId }) {
  const [isHeart, setIsHeart] = useState(hearted);
  const [count, setCount] = useState(heartCount);

  const handleLike = async () => {
    // 좋아요 취소
    if (isHeart) {
      const {
        data: {
          post: { hearted, heartCount },
        },
      } = await axiosPrivate.delete(`/post/${postId}/unheart`);

      setIsHeart(hearted);
      setCount(heartCount);
    }
    // 좋아요
    else {
      const {
        data: {
          post: { hearted, heartCount },
        },
      } = await axiosPrivate.post(`/post/${postId}/heart`);

      setIsHeart(hearted);
      setCount(heartCount);
    }
  };

  return (
    <S.LikeButton onClick={handleLike} isHeart={isHeart}>
      <span className='sr-only'>좋아요버튼</span>
      <span>{count}</span>
    </S.LikeButton>
  );
}
