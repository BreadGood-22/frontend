import styled from 'styled-components';
import KakaoIcon from '../../../assets/icons/icon-kakao.svg';
import GoogldIcon from '../../../assets/icons/icon-google.svg';
import FacebookIcon from '../../../assets/icons/icon-facebook.svg';

export const CommonStyle = styled.button`
  position: relative;

  width: 322px;
  height: 44px;
  border-radius: 44px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  background-color: ${({ theme }) => theme.palette.white};
  color: ${({ theme }) => theme.palette.darkGray};

  & {
    margin-bottom: 10px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    background: no-repeat center / contain;
    width: 18px;
    height: 18px;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const KaKaoLogin = styled(CommonStyle)`
  border: 1px solid #f2c94c;
  &::before {
    background-image: url(${KakaoIcon});
  }
`;

export const GoogleLogin = styled(CommonStyle)`
  border: 1px solid ${({ theme }) => theme.palette.darkGray};
  &::before {
    background-image: url(${GoogldIcon});
  }
`;

export const FacebookLogin = styled(CommonStyle)`
  border: 1px solid #2d9cdb;
  &::before {
    background-image: url(${FacebookIcon});
  }
`;
