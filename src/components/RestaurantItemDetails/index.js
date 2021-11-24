import {AiFillStar} from 'react-icons/ai'

import './index.css'

const RestaurantItemDetails = props => {
  const {restaurantData} = props
  const {
    name,
    imageUrl,
    cuisine,
    rating,
    reviewsCount,
    location,
    costForTwo,
  } = restaurantData

  return (
    <div className="restaurant-details-main-container">
      <div className="restaurant-details-container">
        <div className="image-container">
          <img src={imageUrl} alt="restaurant" className="restaurant-img" />
        </div>
        <div className="name-location-container">
          <h1 className="restaurant-name">{name}</h1>
          <p className="restaurant-cuisine">{cuisine}</p>
          <p className="restaurant-cuisine">{location}</p>
          <div className="rating-cost-container">
            <div>
              <div className="rating-container1">
                <AiFillStar className="star1" />
                <p className="restaurant-rating"> {rating}</p>
              </div>
              <p className="restaurant-Cost">{reviewsCount}+ Ratings</p>
            </div>
            <div>
              <hr className="line" />
            </div>
            <div>
              <p className="restaurant-rating">Rs {costForTwo}</p>
              <p className="restaurant-Cost">Cost for two</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantItemDetails
