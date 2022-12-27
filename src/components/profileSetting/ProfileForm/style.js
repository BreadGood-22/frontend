import styled from 'styled-components';
import Profile from '../../../assets/images/basic-profile-img.png';
import UploadFile from '../../../assets/images/upload-file.png';

export const WarningText = styled.strong`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  color: ${({ theme }) => theme.palette.brown};
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  margin-top: 6px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  height: 110px;
  margin-bottom: 30px;
`;

export const Img = styled.img.attrs({
  src: Profile,
  alt: '프로필 기본 이미지',
})`
  object-fit: contain;
  width: 110px;
  height: 110px;
  border-radius: 70%;
`;

export const UploadImg = styled.img.attrs({
  src: UploadFile,
  alt: '프로필 수정',
})`
  right: 104px;
  width: 36px;
  height: 36px;
  position: absolute;
  bottom: 0;
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
