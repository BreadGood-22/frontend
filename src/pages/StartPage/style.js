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
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.beige};
  animation-name: ${ImageFadeIn};
  animation-duration: 1s;

  min-height: -webkit-fill-available;

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

export const Logo = styled.img`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
  width: 150px;
  height: 150px;
`;
