import styled from 'styled-components';
import { SmallImgButtonLabel, SmallImgButtonInput, Label } from '../../index';

export const WarningText = styled.strong`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  color: ${({ theme }) => theme.palette.brown};
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  margin-top: 6px;
`;

export const Form = styled.form`
  & label {
    margin-top: 16px;
  }
  & label:nth-child(1) {
    margin-top: 0;
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
`;

export const Image = styled.img.attrs({
  onError: (e) => (e.target.style.display = 'none'),
  onLoad: (e) => (e.target.style.display = 'inline-block'),
})`
  width: 100%;
  height: 100%;
  border-radius: 70px;
  object-fit: cover;
`;
