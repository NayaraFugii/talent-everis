import Feed from './Feed'
import Profile from './Profile'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomeApp from './HomeApp';
import Login from './Login'
import Register from './Register'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={HomeApp} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/feed" component={Feed} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

