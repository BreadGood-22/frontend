import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from '../../../api/apiController';
import * as S from './style';
import { Label, EmailInput, PasswordInput, LargeButton } from '../../index';

export function LoginForm() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, isSubmitting },
  } = useForm({ mode: 'onSubmit' });

  const handleLogin = async (e) => {
    setIsLoading(true);
    try {
      const { email, password } = watch();

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
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit(handleLogin)}>
        <Label>이메일</Label>
        <EmailInput
          {...register('email', {
            required: true,
          })}
        />
        <Label>비밀번호</Label>
        <PasswordInput
          {...register('password', {
            required: true,
          })}
        />
        <S.WarningText isVisible={!!error}>*{error}</S.WarningText>
        <LargeButton disabled={!isValid || isSubmitting}>로그인</LargeButton>
      </S.Form>
      <S.SignupLink to='/signup'>이메일로 회원가입</S.SignupLink>
    </>
  );
}
