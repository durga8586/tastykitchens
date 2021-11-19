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
    cartList: [],
  }

  componentDidMount() {
    this.getCart()
  }

  getCartData = () => {
    const cartList = localStorage.getItem('cartData')
    const parsedCartList = JSON.parse(cartList)
    if (parsedCartList === null) {
      return []
    }
    return parsedCartList
  }

  getCart = () => {
    const cartList = this.getCartData()
    this.setState({cartList})
  }

  onClickPlaceOrder = () => {
    this.setState({isOrderPlaced: true})
  }

  onClickItemDecrement = foodItem => {
    const {cartList} = this.state
    if (foodItem.quantity === 1) {
      const updatedCartList = cartList.filter(
        eachItem => eachItem.id !== foodItem.id,
      )
      localStorage.setItem('cartData', JSON.stringify(updatedCartList))
      this.setState({cartList: updatedCartList})
    } else {
      const updatedCartList = cartList.map(eachItem => {
        if (eachItem.id === foodItem.id) {
          const updatedQuantity = eachItem.quantity - 1
          return {...eachItem, quantity: updatedQuantity}
        }
        return eachItem
      })
      localStorage.setItem('cartData', JSON.stringify(updatedCartList))
      this.setState({cartList: updatedCartList})
    }
  }

  onClickItemIncrement = foodItem => {
    const {cartList} = this.state
    const updatedCartList = cartList.map(eachItem => {
      if (eachItem.id === foodItem.id) {
        const updatedQuantity = eachItem.quantity + 1
        return {...eachItem, quantity: updatedQuantity}
      }
      return eachItem
    })
    localStorage.setItem('cartData', JSON.stringify(updatedCartList))
    this.setState({cartList: updatedCartList})
  }

  renderCartListView = () => {
    const {cartList} = this.state
    const isCartEmpty = cartList.length === 0

    let total = 0
    if (!isCartEmpty) {
      cartList.forEach(eachItem => {
        total += eachItem.cost * eachItem.quantity
      })
    }

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
                {cartList.map(eachItem => (
                  <CartItem
                    cartItem={eachItem}
                    key={eachItem.id}
                    onClickItemDecrement={this.onClickItemDecrement}
                    onClickItemIncrement={this.onClickItemIncrement}
                  />
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
