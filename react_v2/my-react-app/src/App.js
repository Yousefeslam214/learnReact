import React, {Component} from 'react';
import Items from './commponents/item'

class App extends Component {
  state = {
    itemsObj : [
      {id:1 , name:'yousef', age:22},
      {id:2 , name:'yousefeee', age:23}
    ]
    
  }
  handleChange = (e) => {
    const inputValue = e.target.value;
    this.setState((prevState) => ({
      itemsObj: prevState.itemsObj.map((item) => ({
        ...item,
        name: inputValue
      }))
    }));
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name)
  }
  render() {
    return (
      <div className='App'>
        List Items
        <Items itemsReturn={this.state.itemsObj}/>
        Form Part 1
        <form onSubmit={this.handleSubmit}>
          <input type='text'onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
        
      </div>
    );
  }
}

export default App;
