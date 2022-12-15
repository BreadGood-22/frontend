import * as S from './style';
import { LoginForm } from '../../components';

export function LoginPage() {
  return (
    <S.Container>
      <S.H2>로그인</S.H2>
      <LoginForm />
    </S.Container>
  );
}
