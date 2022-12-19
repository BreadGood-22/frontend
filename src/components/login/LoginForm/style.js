import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  & input:nth-child(2) {
    margin-bottom: 16px;
  }
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

export const SignupLink = styled(Link)`
  color: ${({ theme }) => theme.palette.darkGray};
  display: inline-block;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  margin-top: 20px;
`;
