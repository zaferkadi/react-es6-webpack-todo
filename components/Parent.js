import React from 'react';
import Child from './Child.js';
import Options from './Options.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Parent';
    this.state = { data: [
      { id:1, text:'one', completed:false },
      { id:2, text: 'two', completed:false },
      { id:3, text:'three', completed:true }
    ],
  filter:'all'};
    console.log('constructor');
  }

  generateNewID() {
    var data = this.state.data;
    var newId = data.length + 1;
    return newId;
  }


  handleChange(e) {
    if (e.key === 'Enter') {
      if(e.target.value.trim()!='') {
        var newID = this.generateNewID();

        var data = this.state.data;
        data.push({ id: newID, text:e.target.value });
        this.setState({ data:data });
      }
    }
  }
  handleFilter(e){
    console.log(e.target.value);
    this.setState({filter:e.target.value});
  }
  render() {

    var items =  this.state.data.map(
        (item) => {
          var filtered = this.state.filter;
          if(filtered == 'all') {
              return (<Child key={item.id} item={item}/>);
          }else if(filtered =='active'){
            if(item.completed == false) {
              return (<Child key={item.id} item={item}/>);
              }
          }else if(filtered=='completed') {
              if(item.completed == true) {
                return (<Child key={item.id} item={item}/>);
                }
          }


        });

    return (
      <div>
        <input type = "text" onKeyPress={ (e)=>this.handleChange(e)}
          onChange={ e=>this.handleChange(e)}/>        
        <ul>
          <ReactCSSTransitionGroup transitionName="example"
            transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {items}
          </ReactCSSTransitionGroup>
        </ul>
        <Options handleChange={e=>this.handleFilter(e)}/>
    </div>);
  }
}

export default Parent;
