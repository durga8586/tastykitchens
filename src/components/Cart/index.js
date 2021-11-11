import Header from '../Header'
import Footer from '../Footer'
import CartItem from '../CartItem'

import './index.css'

const Cart = () => {
  const cartList = localStorage.getItem('cartList')
  const parsedCartList = JSON.parse(cartList)
  return (
    <>
      <Header />
      <div className="cart-main-container">
        <ul className="cart-container">
          <li className="cart-header">
            <h1 className="cart-header-names">Item</h1>
            <h1 className="cart-header-names">Quantity</h1>
            <h1 className="cart-header-names">Price</h1>
          </li>
          {parsedCartList.map(eachItem => (
            <CartItem cartItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default Cart
