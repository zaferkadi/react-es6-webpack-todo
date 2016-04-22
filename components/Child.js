import React from 'react';

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Child';
  }
  render() {
    return(
    <li>
      {this.props.item.text} <input type="checkbox" defaultChecked={this.props.item.completed}/>
    </li>);
  }
}

export default Child;
