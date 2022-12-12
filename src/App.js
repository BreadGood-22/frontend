import { ThemeProvider } from 'styled-components';
import GlobalStyles from './style/globalStyles';
import theme from './style/theme';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
}

export default App;
