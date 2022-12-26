import styled from 'styled-components';
import homeLogo from '../../../assets/images/symbol-logo-gray.png';

export const Container = styled.section`
  height: calc(100% - 108px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 390px) {
    height: calc(100dvh - 108px);
  }
`;

export const Image = styled.img.attrs({
  src: homeLogo,
  alt: '빵굿빵굿 고양이 발자국',
})`
  width: 74px;
  height: 74px;
  object-fit: cover;
  object-position: center;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: ${({ theme }) => theme.palette.darkGray};
  margin: 15px 0 20px;
`;

export const SearchButton = styled.button`
  width: 120px;
  padding: 13px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.brown};
  border-radius: 44px;
`;
