import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EmailContainer = styled.div`
  margin-bottom: 16px;
`;

export const PasswordContainer = styled.div`
  position: relative;
`;

export const WarningText = styled.strong`
  position: absolute;
  bottom: -20px;
  display: block;
  color: ${({ theme }) => theme.palette.brown};
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
`;

export const SignupLink = styled(Link)`
  color: ${({ theme }) => theme.palette.darkGray};
  display: inline-block;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  margin-top: 20px;
`;
