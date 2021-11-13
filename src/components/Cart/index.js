import {Component} from 'react'

import Header from '../Header'
import Footer from '../Footer'
import CartItem from '../CartItem'
import EmptyCartView from '../EmptyCartView'
import OrderPlaced from '../OrderPlaced'

import './index.css'

class Cart extends Component {
  state = {
    isOrderPlaced: false,
  }

  onClickPlaceOrder = () => {
    this.setState({isOrderPlaced: true})
  }

  renderCartListView = () => {
    const cartList = localStorage.getItem('cartList')
    const parsedCartList = JSON.parse(cartList)
    let total = 0
    parsedCartList.forEach(eachItem => {
      total += eachItem.cost * eachItem.quantity
    })

    const isCartEmpty = parsedCartList.length === 0

    return (
      <>
        {isCartEmpty && <EmptyCartView />}
        {!isCartEmpty && (
          <>
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
              <div className="cart-summary-container">
                <div className="order-price-container">
                  <h1 className="order-total">Order Total: </h1>
                  <p className="total-price" testid="total-price">
                    Rs {total}.00
                  </p>
                </div>
                <div className="place-order-button-container">
                  <button
                    className="place-order-button"
                    type="button"
                    onClick={this.onClickPlaceOrder}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
            <Footer />
          </>
        )}
      </>
    )
  }

  render() {
    const {isOrderPlaced} = this.state

    return (
      <>
        <Header />
        {!isOrderPlaced && this.renderCartListView()}
        {isOrderPlaced && <OrderPlaced />}
      </>
    )
  }
}

export default Cart
