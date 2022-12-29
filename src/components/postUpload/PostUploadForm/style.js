import styled from 'styled-components';

export const Container = styled.section`
  padding: 0 16px;
  display: flex;
`;

export const ProfileImg = styled.img.attrs({
  alt: '프로필 이미지',
})`
  width: 42px;
  height: 42px;
  margin-top: 20px;
  object-fit: cover;
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
