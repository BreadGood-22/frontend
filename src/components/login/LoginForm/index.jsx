import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../api/apiController';
import * as S from './style';
import { Label, EmailInput, PasswordInput, LargeButton } from '../../index';

export function LoginForm() {
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('/user/login', {
      user: {
        email,
        password,
      },
    });

    if (data.status === 422) {
      return setError(data.message);
    }

    localStorage.setItem('token', JSON.stringify(data.user?.token));
    localStorage.setItem('accountname', JSON.stringify(data.user?.accountname));
    navigate('/', { replace: true });

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
        <S.WarningText isVisible={!!error}>{error}</S.WarningText>
        <LargeButton disabled={isDisabled}>로그인</LargeButton>
      </S.Form>
      <S.SignupLink to='/signup'>이메일로 회원가입</S.SignupLink>
    </>
  );
}
