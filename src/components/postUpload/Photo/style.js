import styled from 'styled-components';
import RemoveIcon from '../../../assets/icons/icon-img-remove.svg';

export const Photo = styled.li`
  position: relative;
  width: 304px;
  height: 228px;
  overflow: hidden;
  border-radius: 10px;
  border: 0.5px solid ${({ theme }) => theme.palette.lightGray};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PhotoRemove = styled.button`
  position: absolute;
  width: 22px;
  height: 22px;
  top: 6px;
  right: 6px;
  background-image: url(${RemoveIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
