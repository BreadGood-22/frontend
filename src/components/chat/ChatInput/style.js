import styled from 'styled-components';
import { SmallImgButtonLabel, SmallImgButtonInput } from '../../common/Button/style';

export const Form = styled.form`
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
  max-width: 390px;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
  border-top: 1px solid ${({ theme }) => theme.palette.lightGray};
  background-color: ${({ theme }) => theme.palette.white};
`;

export const ImageLabel = styled(SmallImgButtonLabel)`
  width: 36px;
  height: 36px;
  display: inline-block;
  &::after {
    right: 0;
    bottom: 0;
  }
`;

export const ImageInput = styled(SmallImgButtonInput)``;

export const TextInput = styled.input.attrs({
  type: 'text',
  placeholder: '메시지 입력하기...',
})`
  flex-grow: 1;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.palette.mediumGray};
    font-size: 14px;
    line-height: 18px;
  }

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.palette.brown};
  cursor: pointer;

  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.palette.mediumGray};
  }
`;
