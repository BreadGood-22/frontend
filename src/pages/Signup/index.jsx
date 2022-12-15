import { Link } from 'react-router-dom';
import { EmailInput, PasswordInput, LargeButton, Label } from '../../components/index';
import * as S from './style';

export function Signup() {
  return (
    <S.Wrapper>
      <S.H2>이메일로 회원가입</S.H2>
      <S.Form>
        <Label htmlFor='email'>이메일</Label>
        <EmailInput id='email' placeholder='이메일 주소를 입력해 주세요.' />
        <S.WarningText isVisible={false}>*이미 가입된 이메일 주소입니다.</S.WarningText>
        <Label htmlFor='password'>비밀번호</Label>
        <PasswordInput id='password' placeholder='비밀번호를 설정해 주세요.' />
        <S.WarningText isVisible={false}>*비밀번호는 6자 이상이어야 합니다.</S.WarningText>
        <Link to='/profile/setting'>
          <LargeButton content='다음' disabled={true} />
        </Link>
      </S.Form>
    </S.Wrapper>
  );
}
