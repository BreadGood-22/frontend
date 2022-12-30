import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios, { axiosImg, axiosPrivate } from '../../../api/apiController';

import * as S from './style';
import { Label, NameInput, IDInput, IntroduceInput, LargeButton } from '../../index';
import Profile from '../../../assets/images/basic-profile-img.png';

export function ProfileForm() {
  const navigate = useNavigate();
  const [imageURL, setImageURL] = useState(Profile);

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
    const { accountname } = watch();
    const { data } = await axios.post('/user/accountnamevalid', {
      user: {
        accountname,
        // name,
        // introduce,
      },
    });

    if (data.message === '사용 가능한 계정ID 입니다.') {
      // navigate('/start');

      setError('accountname', { message: `*${data.message}` }, { shouldFocus: true });
    }
  };

  // const handleSignup = async () => {
  //   빵굿빵굿 시작하기 눌렀을 때 회원가입 axios 통신 로직
  //   회원가입 axios 통신 시 중복된 아이ㄹ디 아니면 axios 통신이 이루어지도록 조건문추가
  //   Navigate('/start');
  //   const { email, password, user, accountname, introduce, image } = watch();
  //   const { data } = await axios.post('/user', {
  //     user: {
  //       email,
  //       password,
  //       user,
  //       accountname,
  //       introduce,
  //       image,
  //     },
  //   });
  // };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append('image', file);

    const { data } = await axiosImg.post('/image/uploadfile', formData);

    setImageURL(`http://146.56.183.55:5050/${data.filename}`);
  };

  return (
    <S.Form onSubmit={handleSubmit(handleAccountIdValidation)}>
      <S.ImageLabel color='brown'>
        <S.Image src={imageURL} />
      </S.ImageLabel>
      <S.ImageInput
        {...register('image', {
          required: true,
          validate: (fileList) => !!imageURL || fileList.length > 0,
          onChange: (e) => handleImageUpload(e),
        })}
      />
      <Label htmlFor='name'>사용자 이름</Label>
      <NameInput
        {...register('name', {
          required: true,
          minLength: {
            value: 2,
            message: '*2자~10자 이내여야 합니다.',
          },
          maxLength: {
            required: true,
            value: 10,
            message: '*2자~10자 이내여야 합니다.',
          },
        })}
      />
      <S.WarningText isVisible={!!errors.name}>{errors.name?.message}</S.WarningText>

      <Label htmlFor='accountname'>계정 ID</Label>
      <IDInput
        {...register('accountname', {
          required: true,
          maxLength: {
            value: 11,
            message: '*계정 ID는 11자리 이하여야 합니다.',
          },
          pattern: {
            value: /[a-zA-Z0-9_.]/,
            message: '영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.',
          },
        })}
        onFocus={handleAccountIdValidation}
      />
      <S.WarningText isVisible={!!errors.accountname}>{errors.accountname?.message}</S.WarningText>
      <Label>소개</Label>
      <IntroduceInput />
      <LargeButton disabled={!isValid}>빵굿빵굿 시작하기</LargeButton>
    </S.Form>
  );
}
