import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, IndexRoute, browserHistory} from 'react-router'; // won't sudo npm install react-router. missing a peer?
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
