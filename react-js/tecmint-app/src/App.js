import React, { Component } from 'react';
import { Child, childFun } from './Child';
import './App.css';
import {x as yo,y, Test} from './module';
import Test2 from './module'
import Items from './components/items'


/*statefull component */
class App extends Component {
  state = {
    name: 'yodfause',
    items : [
      {id:1, name:'ahmedadfsfa', age:222}
    ]
  }
  Test1234() {
    console.log("Test !")
  }
  Test12 = () => console.log("23 !")
  handleClick = () => console.log(this.state.name)
  handleMouse = () => console.log("moved")
  change = () => {
    console.log(this.state);
    this.setState({
      name: 'mohamed'
    })
    console.log(this.state);
  }
  
  render() {
    return (
      <div className="App">
      Hello React {yo+y}{Test()}{Test2()}
      {this.Test12()}
      {/* <childFun test={this.state.name}/> */}
      <p>{this.state.name}</p>

      <button onClick={this.handleClick} onMouseMove={this.handleMouse}>click</button>
      <button onClick={this.change} onMouseMove={this.handleMouse}>change state</button>
      <Child />
      <Items id="1" name="ahmed" age="22"/>
      <Items id="1" name="ahmed" age="22"/>
      <Items id="1" name="ahmed" age="22"/>
      <Items id="1" name="ahmed" age="22"/>
      <Items items={this.state.items}/>
    </div>
    );
  }
}

export default App;
