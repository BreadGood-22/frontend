import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './style';

export function Navbar() {
  const accountname = JSON.parse(localStorage.getItem('accountname'));

  return (
    <>
      <S.Nav>
        <S.MenuList>
          <S.MenuItem>
            <S.HomeLink to='/'>
              <strong>홈</strong>
            </S.HomeLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.ChatLink to='/chat'>
              <strong>채팅</strong>
            </S.ChatLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.PostLink to='/post/upload'>
              <strong>게시물 작성</strong>
            </S.PostLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.ProfileLink to={`/profile/${accountname}`}>
              <strong>프로필</strong>
            </S.ProfileLink>
          </S.MenuItem>
        </S.MenuList>
      </S.Nav>
      <Outlet />
    </>
  );
}
