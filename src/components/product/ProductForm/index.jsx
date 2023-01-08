import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosImg, axiosPrivate, BASE_URL } from '../../../api/apiController';
import { HeaderSave } from '../../index';
import * as S from './style';

export function ProductForm({ isProductEdit }) {
  const [isLoading, setIsLoading] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const navigate = useNavigate();
  const { productId } = useParams();
  const accountname = JSON.parse(localStorage.getItem('accountname'));
  const {
    register,
    handleSubmit,
    setValue,
    watch,
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
      setValue('price', price);
      setValue('link', link);
      setValue('itemImage', itemImage, { shouldValidate: true });
      setImagePreview(itemImage);
      setImageURL(itemImage);
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

  const handleImageUpload = async (e) => {
    setIsLoading(true);

    const file = e.target.files[0];
    const formData = new FormData();

    formData.append('image', file);

    setImagePreview(URL.createObjectURL(file));

    try {
      const { data } = await axiosImg.post('/image/uploadfile', formData);

      setImageURL(`${BASE_URL}/${data.filename}`);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const handleItemData = async () => {
    setIsLoading(true);

    try {
      const { itemName, price, link } = watch();

      const numberPrice = typeof price === 'number' ? price : parseInt(price.replace(/,/g, ''), 10);

      if (!isProductEdit) {
        const res = await axiosPrivate.post('/product', {
          product: {
            itemName,
            price: numberPrice,
            link,
            itemImage: imageURL,
          },
        });
      } else {
        const res = await axiosPrivate.put(`/product/${productId}`, {
          product: {
            itemName,
            price: numberPrice,
            link,
            itemImage: imageURL,
          },
        });
      }

      navigate(`/profile/${accountname}`);
    } catch (e) {
      console.log(e);
    }
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
          {...register('itemImage', {
            required: true,
            validate: (fileList) => !!imageURL || fileList.length > 0,
            onChange: (e) => handleImageUpload(e),
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
        <S.WarningText isVisible={!!errors.itemName}>{errors.itemName?.message}</S.WarningText>
        <S.TextLabel htmlFor='price'>가격</S.TextLabel>
        <S.PriceInput
          {...register('price', {
            required: true,
            max: {
              value: 10000000,
              message: '*가격은 1000만원 이내여야 합니다.',
            },
            onChange: (e) => setValue('price', e.target.value.replace(/[^0-9]/g, '')),
            onBlur: (e) =>
              e.target.value && setValue('price', new Intl.NumberFormat().format(e.target.value.replace(/,/g, ''))),
          })}
        />
        <S.WarningText isVisible={!!errors.price}>{errors.price?.message}</S.WarningText>
        <S.TextLabel htmlFor='link'>판매링크</S.TextLabel>
        <S.LinkInput
          {...register('link', {
            required: true,
            pattern: {
              // eslint-disable-next-line
              value: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi,
              message: '*http 또는 https를 포함한 정확한 URL을 입력해주세요.',
            },
          })}
        />
        <S.WarningText isVisible={!!errors.link}>{errors.link?.message}</S.WarningText>
      </S.Form>
    </>
  );
}
