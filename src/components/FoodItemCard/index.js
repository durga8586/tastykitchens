import {Component} from 'react'

import Counter from '../Counter'

import './index.css'

class FoodItemCard extends Component {
  state = {
    isRenderCounter: false,
    quantity: 1,
  }

  onAddToCart = () => {
    const {foodItem} = this.props
    const {quantity} = this.state
    const cartList = localStorage.getItem('cartList')
    const parsedCartList = JSON.parse(cartList)
    const newCartItem = {...foodItem, quantity}
    if (parsedCartList === null) {
      const updatedCartList = [newCartItem]
      localStorage.setItem('cartList', JSON.stringify(updatedCartList))
    } else {
      const updatedCartList = [...parsedCartList, newCartItem]
      localStorage.setItem('cartList', JSON.stringify(updatedCartList))
    }
    this.setState(prevState => ({isRenderCounter: !prevState.isRenderCounter}))
  }

  onClickDecrement = () => {
    const {quantity} = this.state
    const {foodItem} = this.props
    const cartList = localStorage.getItem('cartList')
    const parsedCartList = JSON.parse(cartList)
    if (quantity === 1) {
      const updatedCartList = parsedCartList.filter(
        eachItem => eachItem.id !== foodItem.id,
      )
      localStorage.setItem('cartList', JSON.stringify(updatedCartList))
      this.setState(prevState => ({
        isRenderCounter: !prevState.isRenderCounter,
      }))
    } else {
      const updatedCartList = parsedCartList.map(eachCartItem => {
        if (foodItem.id === eachCartItem.id) {
          const updatedQuantity = eachCartItem.quantity - 1
          return {...eachCartItem, quantity: updatedQuantity}
        }
        return eachCartItem
      })
      localStorage.setItem('cartList', JSON.stringify(updatedCartList))
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
    }
  }

  onClickIncrement = () => {
    const {foodItem} = this.props
    const cartList = localStorage.getItem('cartList')
    const parsedCartList = JSON.parse(cartList)
    const updatedCartList = parsedCartList.map(eachCartItem => {
      if (foodItem.id === eachCartItem.id) {
        const updatedQuantity = eachCartItem.quantity + 1
        return {...eachCartItem, quantity: updatedQuantity}
      }
      return eachCartItem
    })
    localStorage.setItem('cartList', JSON.stringify(updatedCartList))
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  render() {
    const {foodItem} = this.props
    const {isRenderCounter, quantity} = this.state

    return (
      <li className="food-item-container" testid="foodItem">
        <img
          src={foodItem.imageUrl}
          className="food-image"
          alt={foodItem.name}
        />
        <div className="food-name-cost-container">
          <h1 className="food-name">{foodItem.name}</h1>
          <p className="food-cost">{foodItem.cost}</p>
          <p className="food-rating">{foodItem.rating}</p>
          {isRenderCounter && (
            <Counter
              quantity={quantity}
              onClickDecrement={this.onClickDecrement}
              onClickIncrement={this.onClickIncrement}
            />
          )}
          {!isRenderCounter && (
            <button
              type="button"
              className="add-cart-button"
              onClick={this.onAddToCart}
            >
              Add
            </button>
          )}
        </div>
      </li>
    )
  }
}

export default FoodItemCard
