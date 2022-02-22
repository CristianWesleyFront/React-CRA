import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import { configureAppStore } from 'store/store';
import GlobalStyles from 'styles/global';
import dTheme from 'styles/themes/default';
import usePersistedState from 'tools/usePersistedState';
import Routes from 'router/routes';

const store = configureAppStore();

function App() {
  const [theme] = usePersistedState<DefaultTheme>('theme', dTheme);

  return (
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <div className="App" data-testid="app">
            <GlobalStyles />
            <Routes />
          </div>
        </ThemeProvider>
      </HelmetProvider>
    </Provider>
  );
}

export default App;
