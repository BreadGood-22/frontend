import styled from 'styled-components';
import splashLogo from '../../../assets/images/splash.svg';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const Logo = styled.img.attrs({
  src: splashLogo,
  alt: '빵굿빵굿',
})`
  width: 165px;
  height: 220px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
