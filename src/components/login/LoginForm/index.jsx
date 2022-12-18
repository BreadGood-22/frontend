import { useEffect, useState } from 'react';
import * as S from './style';
import { Label, EmailInput, PasswordInput, LargeButton } from '../../index';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setError('');
    if (email && password) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    /** POST 보내기
     *
     * */

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <Label>이메일</Label>
        <EmailInput onChange={(e) => setEmail(e.target.value)} required />
        <Label>비밀번호</Label>
        <PasswordInput onChange={(e) => setPassword(e.target.value)} required />
        <S.WarningText isVisible={false}>{error}</S.WarningText>
        <LargeButton disabled={isDisabled}>로그인</LargeButton>
      </S.Form>
      <S.SignupLink to='/signup'>이메일로 회원가입</S.SignupLink>
    </>
  );
}
