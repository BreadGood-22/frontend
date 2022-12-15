import * as S from './style';
import { Label, EmailInput, PasswordInput, LargeButton } from '../../components';

export function Login() {
  return (
    <S.Container>
      <S.H2>로그인</S.H2>
      <S.Form>
        <Label>이메일</Label>
        <EmailInput required />
        <Label>비밀번호</Label>
        <PasswordInput />
        <S.WarningText isVisible={false}></S.WarningText>
        <LargeButton content='로그인' isActive={true}></LargeButton>
      </S.Form>
      <S.SignupLink to='/signup'>이메일로 회원가입</S.SignupLink>
    </S.Container>
  );
}
