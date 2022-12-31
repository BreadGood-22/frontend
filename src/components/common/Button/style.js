import styled from 'styled-components';
import MDImage from '../../../assets/icons/icon-upload-middle.svg';
import SMImageLG from '../../../assets/icons/icon-upload-small-lg.svg';
import SMImageBR from '../../../assets/icons/icon-upload-small-brown.svg';

export const Button = styled.button`
  color: ${({ theme }) => theme.palette.white};
  font-weight: 500;
  font-size: 14px;
`;

export const LargeButton = styled(Button)`
  width: 100%;
  padding: 13px 0;
  border-radius: 44px;
  background-color: ${({ theme }) => theme.palette.brown};
  margin-top: 30px;
  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.palette.beige};
  }
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
  border-radius: 32px;
  background-color: ${({ theme }) => theme.palette.brown};
  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.palette.beige};
  }
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

export const MediumImgButton = styled.label.attrs({
  htmlFor: 'medium-img-button',
})`
  display: inline-block;
  width: 50px;
  height: 50px;
  background-image: url(${MDImage});
  background-repeat: no-repeat;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export const MediumImgButtonInput = styled.input.attrs({
  id: 'medium-img-button',
  type: 'file',
  accept: '.png, .jpg, .jpeg, .gif',
})`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: polygon(0 0, 0 0, 0, 0);
`;

export const SmallImgButtonLabel = styled.label.attrs({
  htmlFor: 'small-img-button',
})`
  display: inline-block;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 12px;
    bottom: 0px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background-image: ${({ color }) => (color === 'brown' ? `url(${SMImageBR})` : `url(${SMImageLG})`)};
  }
  cursor: pointer;
`;

export const SmallImgButtonInput = styled.input.attrs({
  id: 'small-img-button',
  type: 'file',
  accept: '.png, .jpg, .jpeg, .gif',
})`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: polygon(0 0, 0 0, 0, 0);
`;
