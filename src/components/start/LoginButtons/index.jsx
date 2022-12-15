import React from 'react';
import * as S from './style.js';

export function LoginButtons() {
  return (
    <S.LoginButtons>
      <S.KaKaoLogin>카카오톡 계정으로 로그인</S.KaKaoLogin>
      <S.GoogleLogin>구글 계정으로 로그인</S.GoogleLogin>
      <S.FacebookLogin>페이스북 계정으로 로그인</S.FacebookLogin>
      <S.OtherButtons>
        <S.EmailLogin to='/login'>이메일로 로그인</S.EmailLogin>
        <S.Signup to='/signup'>회원가입</S.Signup>
      </S.OtherButtons>
    </S.LoginButtons>
  );
}
