import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.whitishGray}; // theme의 searchbarGray와 동일. 테마 이름 수정 필요.
`;
