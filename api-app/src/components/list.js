import React, { Component } from 'react';

class List extends Component {
  render() {
    let test = this.props.test;
    // console.log(test, "success");
    // console.log(this.props.click);

    return (
      <div className="List">
        <h2>The List component is working.</h2>
        <ul onClick={this.props.click}>
          {test.map((movie, index) => 
            <li key={index}> {movie.Title}</li>)}
        </ul>
      </div>
    );
  }
}

export default List;