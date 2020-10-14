import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import dark from './styles/themes/dark';
import history from './services/history';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <ThemeProvider theme={dark}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

export default App;
