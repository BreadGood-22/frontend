import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 50px;
`;

export const ProfileImg = styled.img.attrs({
  alt: '프로필 이미지',
})`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;

export const UserName = styled.strong`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.palette.black};
`;

export const AccountName = styled.strong`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.palette.darkGray};
`;
