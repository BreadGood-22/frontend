import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import GlobalStyles from './style/globalStyles';
import theme from './style/theme';
import Router from './router/Router';

function App() {
  function setScreenSize() {
    const vh = window.innerHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
