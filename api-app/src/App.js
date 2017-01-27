// NOTE TO PURVI AND DELLA //

// Hey guys, I found I got all jumbled up when I was trying to synthesize React from my memory
// and React the way it was taught in Bridge. So, instead of staying stuck, I just decided
// to build this from memory because I thought maybe it'd be easier to "upgrade" my way of coding
// in React to Rangle's way after getting it to work. That being said, please tell me where I can 
// improve the way I code React from my memory based on Rangle's standards of coding in React!
// I love React and would love to specialize eventually if I can. Thanks!

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
        // one thing about this, is you seem to prefer using the string method of getting properties
        // off of objects, I don't personally object to this - but I'm curious why you don't just type response.Search ?
      })
      // console.log(this.state.movies);
    });
  }

  handleClick(movie) {

    /** the problem here is you are listening to the click event -itself-. We actually don't care about the click event
    the click event is only about where you clicked, what you clicked on, when it was clicked on - etc. It doesn't have
     app related data.

     What you need instead is to react -when- a click happens, and to pass in the data you think is relevant into this
     function when it does. I'll try this little illustration to help clarify:


     Imagine something like this:

     ['A', 'B', 'C'].map(letter => <button>Click Letter: {letter}</button>);

     First, this is just making a list of buttons, with {letter} being replaced with A, B, and C respectively.


     ['A', 'B', 'C'].map(letter => <button onClick={(buttonEvent) => console.log(buttonEvent)}>Click Letter: {letter}</button>);

     now you can see I am passing a simple function into the onClick - this function definition is listening to the actual
     onClick event, and what gets passed into it is the click related information. The console log is going to show things
     that aren't useful to you - you've probably seen this event, and it's a bunch of stuff related to clicking


     ['A', 'B', 'C'].map(letter => <button onClick={(buttonEvent) => console.log(letter)}>Click Letter: {letter}</button>);

     Check out this subtle change - here I no longer care about that button event, I just say 'when the button is clicked,
     and the click event fires, I want to call console.log and pass in my OWN data' - I'll update your code to show you
     how that works in your context, but if you are having trouble with this, maybe we can talk and I can help work you through it

     **/


    // console.log(event); // Can I grab value of the list item being clicked? I know you can for form input values.
    // console.log(event.target); // Maybe...
    // console.log(event.target.value); // Wait, but this gives me a number 0...not the text.
    // So maybe you can't grab the text value of DOM elements?

    this.setState ({
      movie: movie
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

