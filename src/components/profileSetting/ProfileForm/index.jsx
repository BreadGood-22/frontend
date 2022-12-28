import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios, { axiosImg, axiosPrivate } from '../../../api/apiController';
// import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import * as S from './style';
import { Label, NameInput, IDInput, IntroduceInput, LargeButton } from '../../index';
// export function ProfileSettingButton() {
//   return <LargeButton />;
// }

export function ProfileForm() {
  const [imageURL, setImageURL] = useState('');

  const LoginInformation = () => {
    const location = useLocation();
    const email = location.state.email;
    const password = location.state.password;

    if (location.state === undefined) {
      Navigate('/signup');
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setError,
  } = useForm({
    mode: 'onBlur',
  });

  const handleAccountIdValidation = async () => {
    const { name, accountname, introduce } = watch();
    const { data } = await axios.post('/user/accountnamevalid', {
      user: {
        name,
        accountname,
        introduce,
      },
    });

    if (data.message === '사용 가능한 계정ID 입니다.') {
      // 계정 사용 가능 여부 저장
    } else {
      setError('accountname', { message: `*$(data.message)` }, { shouldFocus: true });
    }
  };

  const handleSignup = async () => {
    // 빵굿빵굿 시작하기 눌렀을 때 회원가입 axios 통신 로직
    // 회원가입 axios 통신 시 중복된 아이디 아니면 axios 통신이 이루어지도록 조건문추가
    // Navigate('/start');
    const { email, password, user, accountname, introduce, image } = watch();
    const { data } = await axios.post('/user', {
      user: {
        email,
        password,
        user,
        accountname,
        introduce,
        image,
      },
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append('image', file);

    const { data } = await axiosImg.post('/image/uploadfile', formData);

    setImageURL(`http://146.56.183.55:5050/${data.filename}`);
  };

  return (
    <S.Form onSubmit={handleSubmit(handleAccountIdValidation)}>
      <S.ImageLabel>{/* <S.Image /> */}</S.ImageLabel>
      <S.ImageInput
        {...register('image', {
          required: true,
          //   validate: (fileList) => !!imageURL || fileList.length > 0,
          //   onChange: (e) => handleImageUpload(e),
        })}
      />
      <Label htmlFor='name'>사용자 이름</Label>
      <NameInput />
      <Label htmlFor='accountId'>계정 ID</Label>
      <IDInput
        {...register('accountname', {
          required: true,
          pattern: {
            value: /[a-zA-Z0-9_.]/,
            message: '영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.',
          },
        })}
        onBlur={handleAccountIdValidation}
      />
      <S.WarningText isVisible={!!errors.accountname}>{errors.accountname?.message}</S.WarningText>
      <Label>소개</Label>
      <IntroduceInput />
      <LargeButton disabled={!isValid}>빵굿빵굿 시작하기</LargeButton>
    </S.Form>
  );
}
