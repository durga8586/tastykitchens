import Counter from '../Counter'

import './index.css'

const FoodItemCard = props => {
  const {foodItem} = props

  return (
    <li className="food-item-container">
      <img src={foodItem.imageUrl} className="food-image" alt={foodItem.name} />
      <div className="food-name-cost-container">
        <h1 className="food-name">{foodItem.name}</h1>
        <p className="food-cost">{foodItem.cost}</p>
        <p className="food-rating">{foodItem.rating}</p>
        <Counter />
      </div>
      <button type='button' className = 'add-cart-button'>
          Add
      </button>
    </li>
  )
}

export default FoodItemCard
