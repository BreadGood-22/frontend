import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Image404 />
      <S.Text>페이지를 찾을 수 없습니다..</S.Text>
      <S.PrevButton onClick={() => navigate(-1)}>이전 페이지</S.PrevButton>
    </S.Container>
  );
}
