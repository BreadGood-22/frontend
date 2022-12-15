import styled from 'styled-components';

export const Wrapper = styled.section`
  width: calc(100% - 68px);
  height: 100vh;
  margin: 0 auto;
  text-align: center;
`;

export const H2 = styled.h2`
  margin: 30px 0 40px;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: ${({ theme }) => theme.palette.black};
`;

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
