import { ThemeProvider } from 'styled-components';
import GlobalStyles from './style/globalStyles';
import theme from './style/theme';
import Router from './router/Router';

function App() {
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
