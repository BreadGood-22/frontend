import styled, { css } from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  padding: 16px;

  ${({ height }) =>
    height >= window.innerHeight - 107 &&
    css`
      padding-bottom: 89px;
    `}

  & article + article {
    margin-top: 20px;
  }
`;
