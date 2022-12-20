import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HeartIconOn from '../../../assets/icons/icon-heart-on.svg';
import HeartIconOff from '../../../assets/icons/icon-heart-off.svg';
import ChatIcon from '../../../assets/icons/icon-chat.svg';
import MoreIcon from '../../../assets/icons/icon-more-vertical.svg';

export const Container = styled.section`
  padding: 16px;
`;

export const Post = styled.article`
  margin-bottom: 20px;
  position: relative;
`;

export const AuthorInfo = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const ProfileImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  object-fit: cover;
  margin-right: 12px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.strong`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

export const AccountName = styled.strong`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.palette.darkGray};
`;

export const PostInfo = styled.section`
  padding-left: 54px;
  margin-bottom: 4px;
`;

export const Content = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  width: 100%;
  height: 228px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 16px;
  border: 0.5px solid ${({ theme }) => theme.palette.lightGray};
`;

export const LikeComment = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  margin-right: 18px;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: ${({ theme }) => theme.palette.darkGray};

  &::before {
    display: block;
    content: '';
    width: 20px;
    height: 20px;
    background: ${({ isHeart }) => (isHeart ? `url(${HeartIconOn})` : `url(${HeartIconOff})`)};
    margin-right: 6px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 18px;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: ${({ theme }) => theme.palette.darkGray};

  &::before {
    display: block;
    content: '';
    width: 20px;
    height: 20px;
    background: url(${ChatIcon});
    margin-right: 6px;
  }
`;

export const Date = styled.strong`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: ${({ theme }) => theme.palette.darkGray};
`;

export const MoreButton = styled.button`
  width: 24px;
  height: 24px;
  background: url(${MoreIcon});
  background-position: center;
  position: absolute;
  top: 7px;
  right: 0;
`;
