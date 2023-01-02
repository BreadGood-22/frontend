import styled, { css } from 'styled-components';

export const Container = styled.section`
  padding: 16px;

  ${({ height }) =>
    height >= window.innerHeight - 59 &&
    css`
      padding-bottom: 89px;
    `}

  & article + article {
    margin-top: 20px;
  }
`;
