import styled from 'styled-components';

export const Container = styled.section`
  padding: 16px;

  & article + article {
    margin-top: 20px;
  }
`;
