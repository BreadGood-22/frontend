import styled, { css } from 'styled-components';

export const CommentList = styled.ul`
  padding: 20px 16px;

  ${({ height }) =>
    height >= window.innerHeight - 62 &&
    css`
      padding-bottom: 82px;
    `}

  & li + li {
    margin-top: 16px;
  }
`;
