import styled from 'styled-components';

export const Form = styled.form`
  & label[for='password'] {
    margin-top: 22px;
  }

  & button {
    margin-top: 30px;
  }
`;

export const WarningText = styled.strong`
  display: block;
  position: absolute;
  margin-top: 2px;
  margin-right: auto;
  font-size: 11px;
  line-height: 14px;
  color: ${({ theme }) => theme.palette.brown};
`;
