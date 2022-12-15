import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.beige};
`;

export const Logo = styled.img`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
`;

export const LoginButtons = styled.section`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 390px;
  height: 320px;

  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 20px 20px 0 0;
  padding: 50px 34px;
`;

export const OtherButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.palette.darkGray};
`;

export const EmailLogin = styled(Link)`
  font-size: 12px;
  border-right: 1px solid ${({ theme }) => theme.palette.mediumGray};
  padding-right: 12px;
`;

export const Signup = styled(Link)`
  font-size: 12px;
  padding-left: 12px;
`;
