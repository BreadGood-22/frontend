import styled from 'styled-components';
import image404 from '../../../assets/images/404.webp';

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
  margin: 0 auto;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

export const Image404 = styled.img.attrs({
  src: image404,
  alt: '',
})`
  width: 158px;
`;

export const Text = styled.p`
  margin: 30px 0 20px;
  color: ${({ theme }) => theme.palette.darkGray};
`;

export const PrevButton = styled.button`
  background-color: ${({ theme }) => theme.palette.brown};
  color: ${({ theme }) => theme.palette.white};
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  border-radius: 44px;
  width: 120px;
  padding: 13px 0;
`;
