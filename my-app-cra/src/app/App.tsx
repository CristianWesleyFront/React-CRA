import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';

import GlobalStyles from 'styles/global';
import dTheme from 'styles/themes/default';
import usePersistedState from 'tools/usePersistedState';
import Routes from 'router/routes';

function App() {
  const [theme] = usePersistedState<DefaultTheme>('theme', dTheme);

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyles />
          <Routes />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
