import Counter from '../Counter'

import './index.css'

const CartItem = props => {
  const {cartItem} = props

  return (
    <li className="cart-items-container">
      <div className="cart-img-name-container">
        <img
          src={cartItem.imageUrl}
          alt={cartItem.name}
          className="cart-item-image"
        />
        <h1 className="cart-item-heading">{cartItem.name}</h1>
      </div>
      <div className="counter-container">
        <Counter quantity={cartItem.quantity} />
      </div>
      <div className="cost-container">
        <p className="cart-cost">Rs. {cartItem.cost}</p>
      </div>
    </li>
  )
}

export default CartItem
