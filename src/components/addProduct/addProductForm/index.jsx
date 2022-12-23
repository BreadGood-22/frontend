import { useForm } from 'react-hook-form';
import { HeaderSave } from '../../index';
import * as S from './style';

export function AddProductForm() {
  const {
    register,
    setValue,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
  });

  return (
    <>
      <HeaderSave disabled={!isValid} />
      <S.Form>
        <S.H3>이미지 등록</S.H3>
        <S.ImageLabel />
        <S.ImageInput />
        <S.TextLabel htmlFor='productName'>상품명</S.TextLabel>
        <S.ProductNameInput
          {...register('productName', {
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
            onBlur: (e) => setValue('price', new Intl.NumberFormat().format(e.target.value)),
          })}
        />
        <S.TextLabel htmlFor='storeLink'>판매링크</S.TextLabel>
        <S.URLInput
          {...register('storeLink', {
            required: true,
            // eslint-disable-next-line
            pattern: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi,
          })}
        />
      </S.Form>
    </>
  );
}
