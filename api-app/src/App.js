// NOTE TO PURVI AND DELLA //

// Hey guys, I found I got all jumbled up when I was trying to synthesize React from my memory
// and React the way it was taught in Bridge. So, instead of staying stuck, I just decided
// to build this from memory because I hypothesized it'd be easier to "upgrade" my way of coding
// in React to Rangle's way after getting it to work. That being said, please tell me where I can 
// improve the way I code React from my memory based on Rangle's standards of coding in React!
// I seriously accept all constructive criticism. I love React and would love to specialize
// eventually if I can. Thanks!

// You'll also find questions I've had littered throughout. Would love insight into those.
// i.e. Why can't I sudo npm instlal react-router?

//

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
    console.log(event); // Can I grab value of the list item being clicked? I know you can for form input values.
    console.log(event.target); // Maybe...
    console.log(event.target.value); // Wait, but this gives me a number 0...not the text.
    // So maybe you can't grab the text value of DOM elements?

    this.setState ({
      movie: "We have successfully linked the handleClick and setState."
    })
    // console.log(this.state.movie);
  }
  
  render() {
    return (
      <div className="App">
        <h1>Main App Component</h1>
        <p>Click on an item in the list to display below.</p>

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

