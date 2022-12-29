import styled from 'styled-components';
import fullLogo from '../../../assets/images/full-logo.png';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const Logo = styled.img.attrs({
  src: fullLogo,
  alt: '빵굿빵굿',
})`
  width: 165px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
