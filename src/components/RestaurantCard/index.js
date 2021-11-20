import {Link} from 'react-router-dom'

import './index.css'

const RestaurantCard = props => {
  const {restaurantData} = props
  const {imageUrl, name, cuisine, userRating, id} = restaurantData
  return (
    <Link to={`/restaurants-list/${id}`} className="link-item">
      <li testid="restaurant-item" className="restaurant-card-container">
        <img src={imageUrl} className="restaurant-image" alt="restaurant" />
        <div className="name-cuisine-rating-container">
          <h1 className="name">{name}</h1>
          <p className="cuisine">{cuisine}</p>
          <div className="rating-container">
            <p className="star-rating">{userRating.rating}</p>
            <h1 className="total-review">({userRating.total_reviews})</h1>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default RestaurantCard
