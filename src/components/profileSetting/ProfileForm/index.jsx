import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios, { axiosImg, BASE_URL } from '../../../api/apiController';

import * as S from './style';
import { Label, NameInput, IDInput, IntroduceInput, LargeButton } from '../../index';
import basicProfile from '../../../assets/images/basic-profile-img.png';

export function ProfileForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [imageURL, setImageURL] = useState(`${BASE_URL}/Ellipse.png`);
  const [imagePreview, setImagePreview] = useState(basicProfile);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setError,
  } = useForm({
    mode: 'onBlur',
  });

  const handleAccountNameValidation = async (e) => {
    const { data } = await axios.post('/user/accountnamevalid', {
      user: {
        accountname: e.target.value,
      },
    });

    if (data.message === '이미 가입된 계정ID 입니다.') {
      setError('accountname', { message: `*${data.message}` }, { shouldFocus: true });
    }
  };

  const handleSignup = async () => {
    setIsLoading(true);

    const { email, password } = location.state;
    const { username, accountname, intro } = watch();

    try {
      if (isValid) {
        const { data } = await axios.post('/user', {
          user: {
            email,
            password,
            username,
            accountname,
            intro,
            image: imageURL,
          },
        });

        if (data.message === '회원가입 성공') {
          navigate('/start');
        }
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const handleImageUpload = async (e) => {
    setIsLoading(true);

    const file = e.target.files[0];
    const formData = new FormData();

    formData.append('image', file);

    try {
      const { data } = await axiosImg.post('/image/uploadfile', formData);

      setImagePreview(URL.createObjectURL(file));
      setImageURL(`${BASE_URL}/${data.filename}`);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  return (
    <S.Form onSubmit={handleSubmit(handleSignup)}>
      <S.ImageLabel color='brown'>
        <S.Image src={imagePreview} />
      </S.ImageLabel>
      <S.ImageInput onChange={(e) => handleImageUpload(e)} />
      <Label htmlFor='username'>사용자 이름</Label>
      <NameInput
        id='username'
        {...register('username', {
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
        id='accountname'
        {...register('accountname', {
          required: true,
          maxLength: {
            value: 11,
            message: '*계정 ID는 11자리 이하여야 합니다.',
          },
          pattern: {
            value: /[a-zA-Z0-9_.]/,
            message: '*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.',
          },
          onBlur: (e) => handleAccountNameValidation(e),
        })}
      />
      <S.WarningText isVisible={!!errors.accountname}>{errors.accountname?.message}</S.WarningText>
      <Label>소개</Label>
      <IntroduceInput {...register('intro')} />
      <LargeButton disabled={!isValid}>빵굿빵굿 시작하기</LargeButton>
    </S.Form>
  );
}
