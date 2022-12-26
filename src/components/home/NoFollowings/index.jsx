import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

export function NoFollowings() {
  return (
    <>
      <S.Container>
        <h2 className='sr-only'>유저 검색해 팔로우 하기</h2>
        <S.Image />
        <S.Description>유저를 검색해 팔로우 해보세요!</S.Description>
        <Link to='search'>
          <S.SearchButton>검색하기</S.SearchButton>
        </Link>
      </S.Container>
    </>
  );
}
