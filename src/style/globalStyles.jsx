import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './font.css';

const GlobalStyles = createGlobalStyle`
  ${reset}

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip-path: polygon(0 0, 0 0, 0, 0);
  } 

  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  body {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
  }

  a {
    text-decoration:none;
    cursor: pointer;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
    padding: 0;
    background-color: inherit;
  }
`;

export default GlobalStyles;
