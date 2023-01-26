import styled from 'styled-components';
import basicProfileImage from '../../../assets/images/basic-profile-img.png';

export const Contents = styled.section`
  height: 42px;
  margin: 26px 16px 25px;
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const YourProfileImage = styled.img.attrs({
  src: basicProfileImage,
  alt: '상대방 프로필 이미지',
})`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  border: 0.5px solid ${({ theme }) => theme.palette.lightGray};
`;

export const MessageContents = styled.section`
  width: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  padding: 2px 0 3px;
  justify-content: space-between;
`;

export const YourName = styled.strong`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.palette.black};
`;

export const YourMessage = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.palette.darkGray};
  text-overflow: ellipsis;
`;

export const Date = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  margin-top: auto;
  margin-bottom: 3px;
  color: ${({ theme }) => theme.palette.lightGray};
`;
