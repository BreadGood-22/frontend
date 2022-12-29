import styled from 'styled-components';

export const Container = styled.section`
  width: calc(100% - 68px);
  margin: 0 auto;
  padding-top: 30px;
  text-align: center;
`;

export const H2 = styled.h2`
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: ${({ theme }) => theme.palette.black};
`;
