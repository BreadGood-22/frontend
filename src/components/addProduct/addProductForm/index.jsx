import * as S from './style';

export function AddProductForm() {
  return (
    <S.Form>
      <S.H3>이미지 등록</S.H3>
      <S.ImageLabel />
      <S.ImageInput />
      <S.TextLabel htmlFor='productName'>상품명</S.TextLabel>
      <S.ProductNameInput />
      <S.TextLabel htmlFor='price'>가격</S.TextLabel>
      <S.PriceInput />
      <S.TextLabel htmlFor='storeLink'>판매링크</S.TextLabel>
      <S.URLInput />
    </S.Form>
  );
}
