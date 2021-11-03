import './index.css'

const RestaurantCard = props => {
  const {restaurantData} = props
  const {imageUrl, name, cuisine, userRating} = restaurantData
  return (
    <li className="restaurant-card-container">
      <img src={imageUrl} className="restaurant-image" alt={name} />
      <div className="name-cuisine-rating-container">
        <h1 className="name">{name}</h1>
        <p className="cuisine">{cuisine}</p>
        <div className="rating-container">
          <p className="star-rating">{userRating.rating}</p>
          <p className="total-review">({userRating.total_reviews})</p>
        </div>
      </div>
    </li>
  )
}

export default RestaurantCard
