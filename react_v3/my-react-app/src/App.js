import React, {Component} from 'react';

class App extends Component {
  state = {
    name: ''
  }
  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      name : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name)
  }
  render() {
    return (
      <div className='App'>
        Form Part 1
        <form onSubmit={this.handleSubmit}>
          <input type='text'onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
        {this.state.name}
      </div>
    );
  }
}

export default App;
