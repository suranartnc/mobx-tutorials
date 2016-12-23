import React, { Component } from 'react'
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'

@observer
class SaleApp extends Component {
 
  @observable price = 0
  @observable discount = 0

  @computed get output() {
    if (this.discount !== 0) {
      return this.price*((100 - this.discount)/100)
    }
    return null
  }

  getPriceElement = (element) => {
    this.priceElement = element
  }  

  handlePriceChange = () => {
    this.price = this.priceElement.value
  }

  handleDiscount = (discount) => () => {
    this.discount = discount
  }

  render() {
    return (
      <div>
        <input ref={this.getPriceElement} onChange={this.handlePriceChange} type="text" value={this.price} />
        <div>
          <button onClick={this.handleDiscount(5)}>5%</button>
          <button onClick={this.handleDiscount(10)}>10%</button>
        </div>
        <p>{this.output}</p>
      </div>
    )
  }
}

export default SaleApp
