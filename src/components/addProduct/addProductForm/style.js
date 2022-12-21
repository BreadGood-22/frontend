import styled from 'styled-components';
import { ActiveTextInput, Label } from '../../index';

export const Form = styled.form`
  width: calc(100% - 68px);
  margin: 30px auto;

  & label[for='productName'] {
    margin-top: 30px;
  }

  & > label {
    margin-top: 16px;
  }
`;

export const H3 = styled.h3`
  display: block;
  margin-bottom: 18px;
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  color: ${({ theme }) => theme.palette.darkGray};
`;

export const TextLabel = styled(Label)`
  font-weight: 400;
`;

export const ProductNameInput = styled(ActiveTextInput).attrs({
  id: 'productName',
  placeholder: '2~15자 이내여야 합니다.',
})``;

export const PriceInput = styled(ActiveTextInput).attrs({
  id: 'price',
  placeholder: '숫자만 입력 가능합니다.',
})``;

export const URLInput = styled(ActiveTextInput).attrs({
  type: 'url',
  id: 'storeLink',
  placeholder: 'URL을 입력해 주세요.',
})``;
