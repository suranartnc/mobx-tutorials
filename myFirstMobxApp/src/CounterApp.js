import React, { Component } from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

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
        <DevTools />
        <p>Counter: {this.props.store.count}</p>
        <button onClick={this.handleDec}>-</button>
        <button onClick={this.handleInc}>+</button>
      </div>
    )
  }
}

export default CounterApp
