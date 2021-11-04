import {Component} from 'react'

import './index.css'

class Counter extends Component {
  render() {
    return (
      <div className="add-buttons-container">
        <button
          type="button"
          className="decrease-button"
          onClick={this.onDecrement}
        >
          -
        </button>
        <div className="items-count">0</div>
        <button
          type="button"
          className="decrease-button"
          onClick={this.onIncrement}
        >
          +
        </button>
      </div>
    )
  }
}

export default Counter
