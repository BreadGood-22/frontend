import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { axiosImg } from '../../../api/apiController';
import { HeaderSave } from '../../index';
import * as S from './style';

export function AddProductForm() {
  const [imageURL, setImageURL] = useState('');

  const {
    register,
    setValue,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      itemImage: '',
    },
  });

  const handleImageUpload = async (e) => {
    const formData = new FormData();
    const file = e.target.files[0];

    formData.append('image', file);

    const { data } = await axiosImg.post('/image/uploadfile', formData);

    setImageURL(`http://146.56.183.55:5050/${data.filename}`);
  };

  return (
    <>
      <HeaderSave disabled={!isValid} />
      <S.Form>
        <S.H3>이미지 등록</S.H3>
        <S.ImageLabel>
          <S.Image src={imageURL} />
        </S.ImageLabel>
        <S.ImageInput
          {...register('itemImage', {
            required: true,
            onChange: (e) => handleImageUpload(e),
          })}
        />
        <S.TextLabel htmlFor='itemName'>상품명</S.TextLabel>
        <S.ItemNameInput
          {...register('itemName', {
            required: true,
            minLength: 2,
            maxLength: 15,
          })}
        />
        <S.TextLabel htmlFor='price'>가격</S.TextLabel>
        <S.PriceInput
          {...register('price', {
            required: true,
            onChange: (e) => setValue('price', e.target.value.replace(/[^0-9]/g, '')),
            onBlur: (e) =>
              e.target.value && setValue('price', new Intl.NumberFormat().format(e.target.value.replace(/,/g, ''))),
          })}
        />
        <S.TextLabel htmlFor='link'>판매링크</S.TextLabel>
        <S.LinkInput
          {...register('link', {
            required: true,
            // eslint-disable-next-line
            pattern: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi,
          })}
        />
      </S.Form>
    </>
  );
}
