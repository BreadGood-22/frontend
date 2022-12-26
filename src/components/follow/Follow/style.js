import styled from 'styled-components';
import profileTest from '../../../assets/images/basic-profile-img.png';

export const Container = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 16px;
  list-style: none;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProfileImg = styled.img.attrs({
  src: profileTest,
  alt: '프로필 이미지',
})`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  margin-left: 12px;
`;

export const UserName = styled.strong`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-top: 5px;
  color: ${({ theme }) => theme.palette.black};
`;

export const UserIntro = styled.strong`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  margin: 6px 0;
  color: ${({ theme }) => theme.palette.darkGray};
`;
