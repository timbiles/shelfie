import react from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './';
import Dashboard from './';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Dashboard" component={Dashboard} />
  </Switch>
);
