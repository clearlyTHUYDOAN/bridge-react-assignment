import React, { Component } from 'react';
import $ from 'jquery';
// import List from './components/list';
// import ListItem from './components/list-itsem.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>The App component is working.</h2>

      </div>
    );
  }
}

export default App;

// CONTAINERS: //
// Containers are for smart components. Purvi used them to be linked 
// in the route tree. The state management is in there and the logic. 
// Think of them like entire pages with dumb components. 

// EXPORTING: //
// It's entirely preference whether you export in the component creation line OR
// at the bottom of the component file. 

// constructor makes the variables declared in a class private to that class.

// super() gives you access to the parent component's properties.

