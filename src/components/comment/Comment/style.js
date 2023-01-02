import styled from 'styled-components';
import MoreIcon from '../../../assets/icons/icon-more-vertical.svg';

export const CommentItem = styled.li`
  width: 100%;
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
  border: 1px solid ${({ theme }) => theme.palette.lightGray};
  margin-right: 12px;
`;

export const TextContainer = styled.div`
  margin-bottom: 4px;
`;

export const UserName = styled.strong`
  font-weight: 500;
  font-size: 14px;
  margin-right: 6px;
  vertical-align: middle;
`;

export const Time = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  color: ${({ theme }) => theme.palette.darkGray};

  &::before {
    display: inline-block;
    content: '';
    width: 2px;
    height: 2px;
    background-color: ${({ theme }) => theme.palette.darkGray};
    margin-right: 5px;
    vertical-align: middle;
  }
`;

export const PostInfo = styled.section`
  padding-left: 54px;
`;

export const Content = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  word-wrap: break-word;
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
