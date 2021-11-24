import './index.css'

const CartItem = props => {
  const {cartItem, onClickItemDecrement, onClickItemIncrement} = props

  const onIncrementItem = () => {
    onClickItemIncrement(cartItem)
  }

  const onDecrementItem = () => {
    onClickItemDecrement(cartItem)
  }

  return (
    <li className="cart-items-container" testid="cartItem">
      <div className="cart-img-name-container">
        <img
          src={cartItem.imageUrl}
          alt={cartItem.name}
          className="cart-item-image"
        />
      </div>
      <div className="food-cart-container">
        <h1 className="cart-item-heading">{cartItem.name}</h1>
        <div className="add-buttons-container">
          <button
            type="button"
            className="decrease-button"
            onClick={onDecrementItem}
            testid="decrement-quantity"
          >
            -
          </button>
          <p className="items-count" testid="item-quantity">
            {cartItem.quantity}
          </p>
          <button
            type="button"
            className="decrease-button"
            onClick={onIncrementItem}
            testid="increment-quantity"
          >
            +
          </button>
        </div>
        <p className="cart-cost">Rs. {cartItem.cost * cartItem.quantity}.00</p>
      </div>
    </li>
  )
}

export default CartItem
