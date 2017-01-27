import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
// won't sudo npm install react-router. missing a peer?
// Della: that's odd, I literally just typed in npm i --save react-router, maybe we can look at it together on your machine
import App from './App';
import './index.css';


//With React router, you need to imagine it as a component itself, an HTML tag even. Imagine that the router needs
//to wrap your entire application - and that it's children need to be Routes - kind of like how how ul and li work together,
//every item in the 'list' is a route, and that route needs to have to parameters, the path and the component to show
//notice for the route below all I have is a simple string that says "/" for the path - that essentially means 'root',
//meaning that when your app loads, its the first thing you'll see. The component passed in is just the -definition-
//of app, not an instantiated version - ie, App not <App /> - the route itself takes care of when to instantiate it

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/"  component={App} />
  </Router>,
  document.getElementById('root')
);
