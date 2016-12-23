import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer
class CounterApp extends Component {

  handleDec = () => {
    this.props.store.decrement()
  }

  handleInc = () => {
    this.props.store.increment()
  }

  render() {
    return (
      <div>
        <p>Counter: {this.props.store.count}</p>
        <button onClick={this.handleDec}>-</button>
        <button onClick={this.handleInc}>+</button>
      </div>
    )
  }
}

export default CounterApp
