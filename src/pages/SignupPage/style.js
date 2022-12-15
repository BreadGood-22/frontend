import styled from 'styled-components';

export const Container = styled.section`
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
