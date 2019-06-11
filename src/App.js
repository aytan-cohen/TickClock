import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

class Clock extends Component {
  state = {
    time: new Date()
  };

  componentDidMount()
  {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick()
  {
    this.setState({
      time: new Date()
    });
  }

  render(){
    return (
    <div>
      <h1>
        The time is: {this.state.time.toLocaleTimeString()}
      </h1>
    </div>
    );
  }
}

export default App;
