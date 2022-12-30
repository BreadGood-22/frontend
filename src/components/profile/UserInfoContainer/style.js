import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  width: 100%;
  height: 314px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 26px;
  position: relative;
  background-color: ${({ theme }) => theme.palette.white};
  margin-bottom: 6px;
  border-bottom: 0.5px solid ${({ theme }) => theme.palette.lightGray};
`;

export const ProfileImage = styled.img.attrs({
  alt: '프로필 이미지',
})`
  width: 110px;
  height: 110px;
  border-radius: 55px;
  margin-bottom: 16px;
  object-fit: cover;
`;

export const AccountName = styled.strong`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 6px;
`;

export const AccountId = styled.strong`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.palette.darkGray};
  margin-bottom: 16px;
`;

export const Intro = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.palette.darkGray};
`;

export const StyledLink = styled(Link)`
  text-align: center;
  position: absolute;
  top: 65px;

  &:nth-child(5) {
    left: 56px;
  }

  &:nth-child(6) {
    right: 56px;
    top: 65px;
  }
`;

export const Count = styled.strong`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;
export const FollowType = styled.p`
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  color: ${({ theme }) => theme.palette.darkGray};
`;
export const ProfileEditButton = styled(Link)`
  border: 1px solid ${({ theme }) => theme.palette.lightGray};
  color: ${({ theme }) => theme.palette.darkGray};
  border-radius: 30px;
  padding: 8px 26px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

export const RegisterButton = styled(ProfileEditButton)`
  padding: 8px 21px;
  margin-left: 12px;
`;

export const IconButton = styled.button`
  width: 34px;
  height: 34px;
  background-color: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.lightGray};
  border-radius: 30px;
  vertical-align: bottom;

  &:nth-child(1) {
    margin-right: 10px;
  }

  &:nth-child(3) {
    margin-left: 10px;
  }
`;
