import styled from 'styled-components';
import HeartIconOn from '../../../assets/icons/icon-heart-on.svg';
import HeartIconOff from '../../../assets/icons/icon-heart-off.svg';

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
