import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.lightGray};
`;

export const CommentList = styled.ul`
  padding: 20px 16px 0;

  & li + li {
    margin-top: 16px;
  }
`;
