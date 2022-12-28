import styled, { keyframes } from 'styled-components';

const ImageFadeIn = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.beige};
  animation-name: ${ImageFadeIn};
  animation-duration: 1s;
`;

export const Logo = styled.img`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
`;
