'use strict';
import React from 'react';

class Options extends React.Component {
  constructor(props) {
    super(props);    
  }
  render() {
    return (
      <div>
        <input type="radio" name="filter" onChange={this.props.handleChange} value="all"/>All
        <input type="radio" name="filter" onChange={this.props.handleChange} value="completed"/>Completed
        <input type="radio" name="filter" onChange={this.props.handleChange} value="active"/>Active
      </div>
    );
  }

}

export default Options;
