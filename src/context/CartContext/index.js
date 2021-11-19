import React from 'react'

const CartContext = React.createContext({
  addCartItem: () => {},
  quantity: 1,
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default CartContext
