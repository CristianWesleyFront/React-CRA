import { DefaultTheme, ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/global';
import dTheme from '../styles/themes/default';
import usePersistedState from '../tools/usePersistedState';

function App() {
  const [theme] = usePersistedState<DefaultTheme>("theme", dTheme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
}

export default App;
