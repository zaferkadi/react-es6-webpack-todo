import React from 'react';
import Parent from './components/Parent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'App';
  }
  render() {
    var data = [{id:1, text:'one'},{id:2, text: 'two'},{id:3,text:'three'}];
    return <div><Parent/></div>;
    }
  }
  
  export default App;
