import styled from 'styled-components';
import BasicProfileImage from '../../../assets/images/basic-profile-img.png';

export const Container = styled.section`
  width: min(390px, 100%);
  position: fixed;
  bottom: 0;
  border-top: 1px solid ${({ theme }) => theme.palette.lightGray};
  padding: 13px 16px 12px;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 18px;
  gap: 18px;
  background-color: ${({ theme }) => theme.palette.white};
`;

export const ProfileImage = styled.img.attrs({
  src: BasicProfileImage,
  alt: '사용자 프로필 이미지',
})`
  width: 36px;
  height: 36px;
  border-radius: 18px;
`;

export const Input = styled.input.attrs({
  placeholder: '댓글 입력하기...',
})`
  border: none;
  outline: none;
  flex-grow: 1;
  &::placeholder {
    color: ${({ theme }) => theme.palette.mediumGray};
  }
`;

export const Button = styled.button`
  font-weight: 500;
  color: ${({ theme }) => theme.palette.brown};
  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.palette.mediumGray};
  }
`;
