import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { addImage, addAccountNameValid, addUserInfo } from '../../../api';
import * as S from './style';
import { Label, NameInput, IDInput, IntroduceInput, LargeButton } from '../../index';
import basicProfile from '../../../assets/images/basic-profile-img.png';

export function ProfileForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [imagePreview, setImagePreview] = useState(basicProfile);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({
    mode: 'onBlur',
  });

  const handleAccountNameValidation = async (e) => {
    setIsLoading(true);
    await addAccountNameValid(e).then((res) => {
      if (res === '이미 가입된 계정ID 입니다.') {
        setError('accountname', { message: `*${res}` }, { shouldFocus: true });
      }
    });
    setIsLoading(false);
  };

  const handleSignup = async (data) => {
    setIsLoading(true);

    const { email, password } = location.state;
    const { username, accountname, intro, imageFile } = data;

    const image =
      imageFile.length > 0 ? await addImage(imageFile[0]) : 'https://mandarin.api.weniv.co.kr/1673585016866.png';

    if (isValid) {
      await addUserInfo({ email, password, username, accountname, intro, image }).then((res) => {
        if (res === '회원가입 성공') {
          navigate('/start');
        }
      });
    }

    setIsLoading(false);
  };

  const handleImagePreview = (e) => {
    const file = e.target.files[0];

    setImagePreview(URL.createObjectURL(file));
  };

  useEffect(() => {
    if (!location.state) {
      navigate('/signup');
    }
  }, []);

  return (
    <S.Form onSubmit={handleSubmit(handleSignup)}>
      <S.ImageLabel color='brown'>
        <S.Image src={imagePreview} />
      </S.ImageLabel>
      <S.ImageInput
        {...register('imageFile', {
          onChange: (e) => handleImagePreview(e),
        })}
      />
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
      {errors?.username && <S.WarningText>{errors?.username?.message}</S.WarningText>}
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
            value: /^[a-zA-Z0-9_.]*$/,
            message: '*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.',
          },
          onBlur: (e) => handleAccountNameValidation(e),
        })}
      />
      {errors?.accountname && <S.WarningText>{errors?.accountname?.message}</S.WarningText>}
      <Label htmlFor='intro'>소개</Label>
      <IntroduceInput id='intro' {...register('intro')} />
      <LargeButton disabled={!isValid}>빵굿빵굿 시작하기</LargeButton>
    </S.Form>
  );
}
