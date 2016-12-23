import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import './App.css';

@observer
class App extends Component {
  @observable count = 0

  handleDec = () => {
    this.count--
  }

  handleInc = () => {
    this.count++
  }

  render() {
    return (
      <div>
        <p>Counter: {this.count}</p>
        <button onClick={this.handleDec}>-</button>
        <button onClick={this.handleInc}>+</button>
      </div>
    );
  }
}

export default App;
