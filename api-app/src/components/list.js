import React, { Component } from 'react';

class List extends Component {
  render() {
    let test = this.props.test;
    // console.log(test, "success");
    // console.log(this.props.click);

    return (
      <div className="List">
        <h2>The List component seems to be working.</h2>

        {/*Like I mentioned before, this function needs to not listen to the click event itself, which happens
        when you write it like this - you are passed it uncalled into the click handler, and the event it gets is the
        click value, we want to -ignore- that event, and just do our own thing. Additionally, we want it on the actual
        list -item- itself, not on the list. When we click anywhere in the list, we wont have easy access to the list item
        clicked on*/}
        <ul>
          {test.map((movie, index) => 
            <li onClick={(eventToIgnore) => this.props.click(movie)} key={index}> {movie.Title}</li>)}
        </ul>
      </div>
    );
  }
}

export default List;