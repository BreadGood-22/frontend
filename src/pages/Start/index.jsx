import React from 'react';
import * as S from './style';
import logo from '../../assets/images/symbol-logo.png';
import { KaKaoLogin, GoogleLogin, FacebookLogin } from '../../components/index';

export function Start() {
  return (
    <S.Container>
      <S.Logo src={logo} />
      <S.LoginButtons>
        <h2 className='sr-only'>로그인 방법 선택</h2>
        <div className='social-login'>
          <KaKaoLogin>카카오톡 계정으로 로그인</KaKaoLogin>
          <GoogleLogin>구글 계정으로 로그인</GoogleLogin>
          <FacebookLogin>페이스북 계정으로 로그인</FacebookLogin>
        </div>
        <S.OtherButtons>
          <S.EmailLogin to='/login'>이메일로 로그인</S.EmailLogin>
          <S.Signup to='/signup'>회원가입</S.Signup>
        </S.OtherButtons>
      </S.LoginButtons>
    </S.Container>
  );
}
