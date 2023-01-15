import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { addImage, addProduct, updateProduct } from '../../../api';
import { axiosPrivate } from '../../../api/apiController';
import { HeaderSave } from '../../index';
import * as S from './style';

export function ProductForm({ isProductEdit }) {
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState('');
  const navigate = useNavigate();
  const { productId } = useParams();
  const accountname = JSON.parse(localStorage.getItem('accountname'));
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onChange',
  });

  const getProductContent = async () => {
    setIsLoading(true);

    try {
      const {
        data: {
          product: { itemName, price, link, itemImage },
        },
      } = await axiosPrivate.get(`/product/detail/${productId}`);

      setValue('itemName', itemName);
      setValue('price', `${price}`);
      setValue('link', link);
      setValue('imageFile', itemImage, { shouldValidate: true });
      setImagePreview(itemImage);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (isProductEdit) {
      getProductContent();
    }
  }, []);

  const handleImagePreview = (e) => {
    const file = e.target.files[0];

    setImagePreview(URL.createObjectURL(file));
  };

  const handleItemData = async (data) => {
    setIsLoading(true);

    const { itemName, link, imageFile } = data;
    const inputPrice = getValues('price');
    const price = typeof inputPrice === 'number' ? inputPrice : parseInt(inputPrice.replace(/,/g, ''), 10);

    const itemImage = await addImage(imageFile[0]);

    if (!isProductEdit) {
      await addProduct({ itemName, price, link, itemImage });
    } else {
      await updateProduct({ productId, itemName, price, link, itemImage });
    }

    navigate(`/profile/${accountname}`);

    setIsLoading(false);
  };

  return (
    <>
      <HeaderSave disabled={!isValid} formId='product-form' />
      <S.Form id='product-form' onSubmit={handleSubmit(handleItemData)}>
        <S.H3>이미지 등록</S.H3>
        <S.ImageLabel>
          <S.Image src={imagePreview} />
        </S.ImageLabel>
        <S.ImageInput
          {...register('imageFile', {
            required: true,
            validate: (fileList) => fileList.length > 0,
            onChange: (e) => handleImagePreview(e),
          })}
        />
        <S.TextLabel htmlFor='itemName'>상품명</S.TextLabel>
        <S.ItemNameInput
          {...register('itemName', {
            required: true,
            minLength: {
              value: 2,
              message: '*상품명은 2~15자 이내여야 합니다.',
            },
            maxLength: {
              value: 15,
              message: '*상품명은 2~15자 이내여야 합니다.',
            },
          })}
        />
        {errors?.itemName && <S.WarningText>{errors.itemName?.message}</S.WarningText>}
        <S.TextLabel htmlFor='price'>가격</S.TextLabel>
        <S.PriceInput
          {...register('price', {
            required: true,
            validate: (value) => value.replace(/,/g, '') <= 10000000 || '*가격은 1000만원 이내여야 합니다.',
            onChange: (e) => setValue('price', e.target.value.replace(/[^0-9]/g, '')),
            onBlur: (e) =>
              e.target.value && setValue('price', new Intl.NumberFormat().format(e.target.value.replace(/,/g, ''))),
          })}
        />
        {errors?.price && <S.WarningText>{errors.price?.message}</S.WarningText>}
        <S.TextLabel htmlFor='link'>판매링크</S.TextLabel>
        <S.LinkInput
          {...register('link', {
            required: true,
            pattern: {
              // eslint-disable-next-line
              value: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
              message: '*http 또는 https를 포함한 정확한 URL을 입력해주세요.',
            },
          })}
        />
        {errors?.link && <S.WarningText>{errors.link?.message}</S.WarningText>}
      </S.Form>
    </>
  );
}
