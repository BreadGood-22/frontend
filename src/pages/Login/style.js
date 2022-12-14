import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.section`
  width: calc(100% - 68px);
  text-align: center;
  margin: 0 auto;
`;

export const H2 = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  margin: 30px 0 40px;
`;

export const EmailWrapper = styled.div`
  margin-bottom: 16px;
`;

export const WarningText = styled.strong`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  color: ${({ theme }) => theme.palette.brown};
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  margin-top: 6px;
`;

export const ButtonWrapper = styled.div`
  margin: 30px 0 20px;
`;

export const SignupLink = styled(Link)`
  color: ${({ theme }) => theme.palette.darkGray};
  display: inline-block;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;
