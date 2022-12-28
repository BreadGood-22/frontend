import styled from 'styled-components';
import basicProfileImage from '../../../assets/images/basic-profile-img.png';
import imageExample from '../../../assets/images/chat-example-img.png';

export const Container = styled.section`
  height: calc(100vh - 108px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
  padding: 0 16px 20px;
  background-color: ${({ theme }) => theme.palette.whitishGray};
`;

export const YourMessageItem = styled.div`
  display: flex;
  gap: 6px;
`;

export const YourProfileImage = styled.img.attrs({
  src: basicProfileImage,
  alt: '상대방 프로필 이미지',
})`
  width: 42px;
  height: 42px;
  margin-right: 6px;
  border-radius: 50%;
  object-fit: cover;
  border: 0.5px solid ${({ theme }) => theme.palette.lightGray};
`;

export const YourTextMessage = styled.p`
  max-width: 240px;
  padding: 12px;
  background-color: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.mediumGray};
  border-radius: 0 10px 10px 10px;
  font-size: 14px;
  line-height: 18px;
  word-break: break-all;
  word-wrap: break-word;
`;

export const MyMessageItem = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 6px;
`;

export const MyTextMessage = styled(YourTextMessage)`
  color: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.brown};
  border-radius: 10px 0 10px 10px;
  background-color: ${({ theme }) => theme.palette.brown};
`;

export const ImageMessage = styled.img.attrs({
  src: imageExample,
  alt: '메세지에 첨부된 사진',
})`
  width: 240px;
  height: 240px;
  border-radius: 10px;
  object-fit: contain;
  background: ${({ theme }) => theme.palette.white};
`;

export const Date = styled.strong`
  font-size: 10px;
  line-height: 13px;
  margin-top: auto;
  color: ${({ theme }) => theme.palette.darkGray};
`;
