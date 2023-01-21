import styled from 'styled-components';
import { ActiveTextInput, Label, SmallImgButtonLabel, SmallImgButtonInput } from '../../index';

export const Form = styled.form`
  width: calc(100% - 68px);
  margin: 30px auto;

  & label[for='small-img-button'] {
    margin-top: 18px;
  }

  & label[for='itemName'] {
    margin-top: 30px;
  }

  & > label {
    margin-top: 24px;
  }
`;

export const H3 = styled.h3`
  display: block;
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  color: ${({ theme }) => theme.palette.darkGray};
`;

export const ImageLabel = styled(SmallImgButtonLabel)`
  width: 100%;
  height: 204px;
  background-color: ${({ theme }) => theme.palette.whitishGray};
  border: 0.5px solid ${({ theme }) => theme.palette.lightGray};
  border-radius: 10px;
  overflow: hidden;
`;

export const Image = styled.img.attrs({
  alt: '상품 이미지',
  onError: (e) => (e.target.style.display = 'none'),
  onLoad: (e) => (e.target.style.display = 'inline-block'),
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: ${({ theme }) => theme.palette.white};
`;

export const ImageInput = styled(SmallImgButtonInput)``;

export const TextLabel = styled(Label)`
  font-weight: 400;
`;

export const ItemNameInput = styled(ActiveTextInput).attrs({
  id: 'itemName',
  placeholder: '2~15자 이내여야 합니다.',
})``;

export const PriceInput = styled(ActiveTextInput).attrs({
  id: 'price',
  placeholder: '숫자만 입력 가능합니다.',
})``;

export const LinkInput = styled(ActiveTextInput).attrs({
  type: 'url',
  id: 'link',
  placeholder: 'URL을 입력해 주세요.',
})``;

export const WarningText = styled.strong`
  display: block;
  position: absolute;
  margin-top: 2px;
  margin-right: auto;
  font-weight: 400;
  font-size: 11px;
  line-height: 14px;
  color: ${({ theme }) => theme.palette.brown};
`;
