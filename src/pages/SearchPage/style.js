import styled, { css } from 'styled-components';

export const Container = styled.ul`
  padding: 20px 16px;

  ${({ height }) =>
    height >= window.innerHeight - 107 &&
    css`
      padding-bottom: 79px;
    `}

  li + li {
    margin-top: 16px;
  }
`;
