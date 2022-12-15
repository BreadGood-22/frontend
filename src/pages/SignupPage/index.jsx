import { SignupForm } from '../../components';
import * as S from './style';

export function SignupPage() {
  return (
    <S.Container>
      <S.H2>이메일로 회원가입</S.H2>
      <SignupForm />
    </S.Container>
  );
}
