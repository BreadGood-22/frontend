import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { addImage, addAccountNameValid, addUserInfo, getUserInfo } from '../../../api';
import * as S from './style';
import { Label, NameInput, IDInput, IntroduceInput } from '../../index';
import basicProfile from '../../../assets/images/basic-profile-img.png';

export function ProfileForm({ setIsValid, isProfileEdit }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { accountname } = useParams();
  const [imagePreview, setImagePreview] = useState(basicProfile);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    setValue,
  } = useForm({
    mode: 'onBlur',
  });

  const getProfileContent = async () => {
    setIsLoading(true);

    const { username, intro, image } = await getUserInfo(accountname);

    setValue('username', username);
    setValue('accountname', accountname);
    setValue('intro', intro);
    setValue('imageFile', image, { shouldValidate: true });
    setImagePreview(image);

    setIsLoading(false);
  };

  useEffect(() => {
    if (isProfileEdit) {
      getProfileContent();
    }
  }, []);

  const handleAccountNameValidation = async (e) => {
    if (e.target.value !== accountname) {
      setIsLoading(true);

      const response = await addAccountNameValid(e);

      if (response === '이미 가입된 계정ID 입니다.') {
        setError('accountname', { message: `*${response}` }, { shouldFocus: true });
      }

      setIsLoading(false);
    }
  };

  const handleSignup = async (data) => {
    setIsLoading(true);

    const { email, password } = location.state;
    const { username, accountname, intro, imageFile } = data;
    const image =
      imageFile.length > 0 ? await addImage(imageFile[0]) : 'https://mandarin.api.weniv.co.kr/1673585016866.png';

    if (isValid) {
      const response = await addUserInfo(email, password, username, accountname, intro, image);

      if (response === '회원가입 성공') {
        navigate('/start');
      }
    }

    setIsLoading(false);
  };

  const handleImagePreview = (e) => {
    const file = e.target.files[0];

    setImagePreview(URL.createObjectURL(file));
  };

  useEffect(() => {
    if (!isProfileEdit && !location.state) {
      navigate('/signup');
    }
  }, []);

  useEffect(() => {
    setIsValid(isValid);
  });

  return (
    <S.Form id='profile-form' onSubmit={handleSubmit(handleSignup)}>
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
    </S.Form>
  );
}
