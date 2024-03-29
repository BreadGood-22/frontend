import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addEmailValid } from '../../../api';
import { EmailInput, PasswordInput, LargeButton, Label } from '../../index';
import * as S from './style';

export function SignupForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    setError,
  } = useForm({
    mode: 'onBlur',
  });

  const handleEmailValidation = async (data) => {
    const { email, password } = data;

    const response = await addEmailValid(email);

    if (response === '사용 가능한 이메일 입니다.') {
      navigate('/profile/setting', {
        state: {
          email,
          password,
        },
      });
    } else {
      setError('email', { message: `*${response}` }, { shouldFocus: true });
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(handleEmailValidation)}>
      <Label htmlFor='email'>이메일</Label>
      <EmailInput
        id='email'
        placeholder='이메일 주소를 입력해 주세요.'
        {...register('email', {
          required: true,
          pattern: {
            value: /^[a-zA-Z0-9-_.]+[@][a-zA-Z0-9]+\.[a-zA-Z]+$/,
            message: '*올바르지 않은 이메일 형식입니다.',
          },
        })}
      />
      {errors?.email && <S.WarningText>{errors?.email?.message}</S.WarningText>}
      <Label htmlFor='password'>비밀번호</Label>
      <PasswordInput
        id='password'
        placeholder='비밀번호를 설정해 주세요.'
        {...register('password', {
          required: true,
          minLength: {
            value: 6,
            message: '*비밀번호는 6자 이상이어야 합니다.',
          },
        })}
      />
      {errors?.password && <S.WarningText>{errors?.password?.message}</S.WarningText>}
      <LargeButton disabled={isSubmitting || !isValid}>다음</LargeButton>
    </S.Form>
  );
}
