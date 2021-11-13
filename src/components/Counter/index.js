import {Component} from 'react'

import './index.css'

class Counter extends Component {
  onDecrement = () => {
    const {onClickDecrement} = this.props
    onClickDecrement()
  }

  onIncrement = () => {
    const {onClickIncrement} = this.props
    onClickIncrement()
  }

  render() {
    const {quantity} = this.props
    return (
      <div className="add-buttons-container">
        <button
          type="button"
          className="decrease-button"
          onClick={this.onDecrement}
          testid="decrement-count"
        >
          -
        </button>
        <div className="items-count" testid="active-count">
          {quantity}
        </div>
        <button
          type="button"
          className="decrease-button"
          onClick={this.onIncrement}
          testid="increment-count"
        >
          +
        </button>
      </div>
    )
  }
}

export default Counter
