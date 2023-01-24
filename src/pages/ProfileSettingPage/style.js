import styled from 'styled-components';

export const Container = styled.section`
  width: calc(100% - 68px);
  margin: 0 auto;
  padding-top: 30px;
  text-align: center;
`;

export const H2 = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 12px;
`;

export const Notice = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  margin: 12px 0 30px;
  color: ${({ theme }) => theme.palette.darkGray};
`;
