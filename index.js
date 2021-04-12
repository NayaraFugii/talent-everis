import React from 'react';
import ReactDOM from 'react-dom';
import HomeApp from './HomeApp';
import Login from './Login'
import Register from './Register'

ReactDOM.render(
  <React.StrictMode>
    <HomeApp />
    <Login/>
    <Register/>
  </React.StrictMode>,
  document.getElementById('root')
);

