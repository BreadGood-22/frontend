import styled from 'styled-components';

export const Container = styled.div`
  max-width: 390px;
  width: 100%;
  height: 100vh;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
  margin: 0 auto;

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;
