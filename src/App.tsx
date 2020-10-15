import React from 'react';
import { useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import history from './services/history';

import { ApplicationState, persistor } from './store';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const theme = useSelector((state: ApplicationState) => state.theme.theme);

  return (
    <ThemeProvider theme={theme}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </ThemeProvider>
  );
};

export default App;
