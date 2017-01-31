import React, {Component} from 'react';


/**
 * Gonna convert this into a function component for you, to show you the difference
 *
 class ListItem extends Component {
  render() {
    // console.log(this.props.testing);
    // console.log(this.props.click);

    return (
      <div className="List-Item">
        <h2>The ListItem component seems to be working.</h2>
        <p>You just clicked:</p>
        <h3>{this.props.testing}</h3>
      </div>
    );
  }
}

 **/

const ListItem = (props) =>
  (<div className="List-Item">
    <h2>The ListItem component seems to be working.</h2>
    <p>You just clicked:</p>
    {/*in this case, 'testing' is recieving the entire movie object, which would not be displayed in an H3, and in fact
    give you an error for trying, instead lets grab the title*/}
    <h3>{props.testing.Title}</h3>
  </div>);

export default ListItem;