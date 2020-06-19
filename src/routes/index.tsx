import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Main from '../pages/Main';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />

    <Route path="/" exact component={Main} isPrivate />
  </Switch>
);

export default Routes;
