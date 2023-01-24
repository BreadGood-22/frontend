import styled from 'styled-components';
import { SmallImgButtonLabel, SmallImgButtonInput } from '../../index';

export const Form = styled.form`
  width: calc(100% - 68px);
  margin: 0 auto;
  text-align: center;

  & label[for='username'] {
    margin-top: 30px;
  }
  & label {
    margin-top: 22px;
  }
  & label[for='small-img-button'] {
    margin-top: 30px;
  }
`;

export const ImageInput = styled(SmallImgButtonInput)``;

export const ImageLabel = styled(SmallImgButtonLabel)`
  width: 120px;
  height: 110px;

  &::after {
    right: 0px;
    bottom: 0px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 70px;
  object-fit: cover;
`;

export const WarningText = styled.strong`
  display: block;
  position: absolute;
  color: ${({ theme }) => theme.palette.brown};
  font-size: 11px;
  line-height: 14px;
  text-align: left;
  margin-top: 2px;
`;
