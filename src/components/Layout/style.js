import styled from 'styled-components';

export const Container = styled.div`
  width: 390px;
  height: 100vh;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
  margin: 0 auto;
  border: 1px solid red;

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;
