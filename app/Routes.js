import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import Calculator from './containers/Calculator';

export default () => (
  <App>
    <Switch>
      <Route path={routes.CALC} component={Calculator} />
    </Switch>
  </App>
);
