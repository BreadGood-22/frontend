import React from 'react';
import { Follow, HeaderFollowers } from '../../components';
import * as S from './style';

export function FollowerPage() {
  return (
    <>
      <HeaderFollowers />
      <S.Container>
        <Follow />
      </S.Container>
    </>
  );
}
