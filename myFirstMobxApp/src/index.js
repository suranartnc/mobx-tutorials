import React from 'react'
import ReactDOM from 'react-dom'

import CounterApp from './CounterApp'
import CounterStore from './CounterStore'

import SaleApp from './SaleApp'

import './index.css'

ReactDOM.render(
  <div>
    <CounterApp store={CounterStore} />
    <SaleApp />
  </div>,
  document.getElementById('root')
)
