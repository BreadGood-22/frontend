import styled from 'styled-components';

export const Container = styled.section`
  min-height: calc(100vh - 59px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.white};
`;
