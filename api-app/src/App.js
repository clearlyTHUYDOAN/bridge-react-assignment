import React, { Component } from 'react';
import $ from 'jquery';
import List from './components/list';
import ListItem from './components/list-item.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
      this.state = {
        movies: [],
        movie: ""
      }
      this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    $.get('http://www.omdbapi.com/?s=harry+potter&y=&plot=short&r=json&type=movie')
    .then(response => {
      // console.log(response["Search"]);
      // let responseArray = response["Search"];
      // console.log(responseArray);
      this.setState ({
        movies: response["Search"]
      })
      // console.log(this.state.movies);
    });
  }

  handleClick(event) {
    console.log(event);
    this.setState ({
      movie: "test"
    })
    console.log(this.state.movie);
  }
  
  render() {
    return (
      <div className="App">
        <h1>Main App Component</h1>

        <List click={this.handleClick} test={this.state.movies} /> 
        <ListItem testing={this.state.movie} />

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

