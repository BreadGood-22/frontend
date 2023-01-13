import styled from 'styled-components';
import { SmallImgButtonLabel, SmallImgButtonInput } from '../../index';

export const WarningText = styled.strong`
  display: block;
  position: absolute;
  color: ${({ theme }) => theme.palette.brown};
  font-size: 11px;
  line-height: 14px;
  text-align: left;
  margin-top: 2px;
`;

export const Form = styled.form`
  & label[for='small-img-button'] {
    margin-top: 0;
  }
  & label[for='username'] {
    margin-top: 16px;
  }
  & label {
    margin-top: 22px;
  }
  & button {
    margin-top: 30px;
  }
`;

export const Container = styled.section`
  width: 322px;
  height: auto;
  text-align: center;
  margin: 0 auto;
`;

export const H2 = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  margin: 30px 0 12px;
`;

export const Notice = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  margin: 12px 0 30px;
  color: ${({ theme }) => theme.palette.darkGray};
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
