import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.palette.white};
`;

export const TabContainer = styled.div`
  padding: 9px 16px;
  border-top: 1px solid ${({ theme }) => theme.palette.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.palette.lightGray};
  background-color: ${({ theme }) => theme.palette.white};
  overflow: hidden;
`;

export const TabList = styled.ul`
  float: right;
  display: flex;
`;

export const TabItem = styled.li`
  width: 26px;
  height: 26px;
`;

export const TabButton = styled.button`
  width: 100%;
  height: 100%;
`;
