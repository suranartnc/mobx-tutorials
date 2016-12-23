import React from 'react'
import ReactDOM from 'react-dom'

import CounterApp from './CounterApp'
import CounterStore from './CounterStore'

import './index.css'

ReactDOM.render(
  <CounterApp store={CounterStore} />,
  document.getElementById('root')
)
