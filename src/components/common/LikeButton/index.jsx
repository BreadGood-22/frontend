import React, { useState } from 'react';
import * as S from './style';
import { addHeart, deleteHeart } from '../../../api';

export function LikeButton({ hearted, heartCount, postId }) {
  const [isHeart, setIsHeart] = useState(hearted);
  const [count, setCount] = useState(heartCount);

  const handleLike = async () => {
    if (isHeart) {
      const { hearted, heartCount } = await deleteHeart(postId);

      setIsHeart(hearted);
      setCount(heartCount);
    } else {
      const { hearted, heartCount } = await addHeart(postId);

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
