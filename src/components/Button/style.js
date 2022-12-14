import styled from 'styled-components';
import { ReactComponent as Image } from '../../assets/icons/icon-image.svg';

export const Button = styled.button`
  color: ${({ theme }) => theme.palette.white};
  font-weight: 500;
  font-size: 14px;
`;

export const LargeButton = styled(Button)`
  width: 100%;
  padding: 13px 0;
  background-color: ${({ isActive, theme }) => (isActive ? `${theme.palette.brown}` : `${theme.palette.beige}`)};
  border-radius: 44px;
`;

export const MediumButton = styled(Button)`
  width: 120px;
  max-width: 120px;
  padding: 8px 0;
  background-color: ${({ isFollowed, theme }) => (isFollowed ? `${theme.palette.white}` : `${theme.palette.brown}`)};
  color: ${({ isFollowed, theme }) => isFollowed && `${theme.palette.darkGray}`};
  border: ${({ isFollowed, theme }) => isFollowed && `1px solid ${theme.palette.lightGray}`};
  border-radius: 30px;
`;

export const SmallButton = styled(Button)`
  width: 90px;
  max-width: 90px;
  padding: 7px 0;
  background-color: ${({ isActive, theme }) => (isActive ? `${theme.palette.brown}` : `${theme.palette.beige}`)};
  border-radius: 32px;
`;

export const XSmallButton = styled.button`
  width: 56px;
  max-width: 56px;
  padding: 7px 0;
  background-color: ${({ isFollowed, theme }) => (isFollowed ? `${theme.palette.white}` : `${theme.palette.brown}`)};
  color: ${({ isFollowed, theme }) => (isFollowed ? `${theme.palette.darkGray}` : `${theme.palette.white}`)};
  border: ${({ isFollowed, theme }) => isFollowed && `1px solid ${theme.palette.lightGray}`};
  border-radius: 26px;
`;

export const MediumImgButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.palette.brown};
  border-radius: 50%;
`;

export const SmallImgButton = styled.button`
  width: 36px;
  height: 36px;
  background-color: ${({ color, theme }) =>
    color === 'lightGray' ? `${theme.palette.lightGray}` : `${theme.palette.brown}`};
  border-radius: 50%;
`;

export const ImageIcon = styled(Image)`
  margin: auto;
  display: block;
  width: ${({ size }) => (size === 'medium' ? `21px` : `17px`)};
  height: ${({ size }) => (size === 'medium' ? `21px` : `17px`)};
`;
