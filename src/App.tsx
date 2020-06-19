import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

const App: React.FC = () => (
  <Router history={history}>
    <Routes />
  </Router>
);

export default App;
