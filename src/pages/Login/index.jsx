import * as S from './style';
import { Label, EmailInput, PasswordInput, LargeButton } from '../../components';

export function Login() {
  return (
    <S.Wrapper>
      <S.H2>로그인</S.H2>
      <form>
        <S.EmailWrapper>
          <Label>이메일</Label>
          <EmailInput />
        </S.EmailWrapper>
        <Label>비밀번호</Label>
        <PasswordInput />
        <S.WarningText isVisible={false}>*이메일 또는 비밀번호가 일치하지 않습니다.</S.WarningText>
        <S.ButtonWrapper>
          <LargeButton content='로그인' isActive={true}></LargeButton>
        </S.ButtonWrapper>
      </form>
      <S.SignupLink to='/signup'>이메일로 회원가입</S.SignupLink>
    </S.Wrapper>
  );
}
