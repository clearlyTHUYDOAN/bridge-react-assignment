import React, { Component } from 'react';
import $ from 'jquery';
// import axios from 'axios';
import List from './components/list';
import ListItem from './components/list-item.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
      this.state = {
        searchedMovies: []
      }
  }
  componentDidMount() {
    $.get('http://www.omdbapi.com/?s=harry+potter&y=&plot=short&r=json&type=movie')
    .then(response => {
      console.log(response["Search"]);
      // this.setState = {

      // }
    });
    // axios.get('http://www.omdbapi.com/?t=harry+potter&y=&plot=short&r=json')
    // .then(response => {
    //   console.log(response.data);
    // })
  }

  render() {
    return (
      <div className="App">
        <List />
        <ListItem />
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

// You HAVE to put your components into src. That's where it's looking.

