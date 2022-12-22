import React, { useState, useEffect } from 'react';
import * as S from './style';

export function CommentInput() {
  const [input, setInput] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

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
      <S.Button disabled={isDisabled}>게시</S.Button>
    </S.Container>
  );
}
