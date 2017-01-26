import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    // console.log(this.props.testing);
    // console.log(this.props.click);

    return (
      <div className="List-Item">
        <h2>The ListItem component is working.</h2>
        <h3>{this.props.testing}</h3>
      </div>
    );
  }
}

export default ListItem;