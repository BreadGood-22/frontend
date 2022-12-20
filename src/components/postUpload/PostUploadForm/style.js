import styled from 'styled-components';
import Profile from '../../../assets/images/basic-profile-img.png';

export const Container = styled.section`
  height: calc(100% - 48px);
  padding: 0 16px;
  display: flex;
`;

export const ProfileImg = styled.img.attrs({
  src: Profile,
  alt: '프로필 이미지',
})`
  width: 42px;
  height: 42px;
  margin-top: 20px;
`;

export const PostWrite = styled.article`
  width: 100%;
  max-width: 304px;
  margin: 32px 0 0 12px;
`;

export const Form = styled.form`
  width: 100%;
`;

export const ContentInput = styled.textarea.attrs({
  placeholder: '게시글 입력하기...',
  rows: '1',
})`
  width: 100%;
  border: none;
  resize: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.palette.black};

  &::placeholder {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.palette.mediumGray};
  }

  &:focus {
    outline: none;
  }
`;

export const ImgUploadButton = styled.article`
  position: fixed;
  bottom: 16px;
  right: calc((100% - 390px) / 2 + 16px);
  z-index: 100;
`;
