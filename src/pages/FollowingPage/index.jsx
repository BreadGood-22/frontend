import React from 'react';
import { Follow, HeaderFollowings } from '../../components';
import * as S from './style';

export function FollowingPage() {
  return (
    <>
      <HeaderFollowings />
      <S.Container>
        <Follow />
      </S.Container>
    </>
  );
}
