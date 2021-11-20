import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Footer from '../Footer'
import FoodItemCard from '../FoodItemCard'
import RestaurantItemDetails from '../RestaurantItemDetails'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class RestaurantDetails extends Component {
  state = {
    restaurantData: {},
    foodData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getRestaurantData()
  }

  getRestaurantData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/restaurants-list/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedRestaurantData = {
        costForTwo: fetchedData.cost_for_two,
        cuisine: fetchedData.cuisine,
        imageUrl: fetchedData.image_url,
        location: fetchedData.location,
        name: fetchedData.name,
        rating: fetchedData.rating,
        reviewsCount: fetchedData.reviews_count,
        id: fetchedData.id,
      }
      const updatedFoodData = fetchedData.food_items.map(eachItem => ({
        cost: eachItem.cost,
        id: eachItem.id,
        imageUrl: eachItem.image_url,
        rating: eachItem.rating,
        name: eachItem.name,
      }))

      this.setState({
        restaurantData: updatedRestaurantData,
        foodData: updatedFoodData,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 404) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderRestaurantDetailsView = () => {
    const {restaurantData, foodData} = this.state

    return (
      <div className="restaurant-main-container">
        <RestaurantItemDetails restaurantData={restaurantData} />
        <ul className="food-items-container">
          {foodData.map(eachFood => (
            <FoodItemCard key={eachFood.id} foodItem={eachFood} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" testid="restaurant-details-loader">
      <Loader type="ThreeDots" color="#F7931E" height="50" width="50" />
    </div>
  )

  renderRestaurantDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderRestaurantDetailsView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="restaurant-details-container">
          {this.renderRestaurantDetails()}
        </div>
        <Footer />
      </>
    )
  }
}

export default RestaurantDetails
