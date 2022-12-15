import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  & :nth-child(4) {
    margin-top: 16px;
  }
  & button {
    margin-top: 30px;
  }
`;

export const WarningText = styled.strong`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  margin-top: 6px;
  margin-right: auto;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.palette.brown};
`;
