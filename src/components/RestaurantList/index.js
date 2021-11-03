import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import SortBy from '../SortBy'
import RestaurantCard from '../RestaurantCard'
import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class RestaurantList extends Component {
  state = {
    restaurantsList: [],
    apiStatus: apiStatusConstants.initial,
    activeOptionId: sortByOptions[0].value,
  }

  componentDidMount() {
    this.getRestaurants()
  }

  getRestaurants = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {activeOptionId} = this.state
    const apiUrl = `https://apis.ccbp.in/restaurants-list?offset=0&limit=9&sort_by_rating=${activeOptionId}`
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
      const updatedData = fetchedData.restaurants.map(restaurant => ({
        costPerTwo: restaurant.cost_for_two,
        cuisine: restaurant.cuisine,
        groupByTime: restaurant.group_by_time,
        hasOnlineDelivery: restaurant.has_online_delivery,
        hasTableBooking: restaurant.has_table_booking,
        id: restaurant.id,
        imageUrl: restaurant.image_url,
        isDeliveringNow: restaurant.is_delivering_now,
        location: restaurant.location,
        menuType: restaurant.menu_type,
        name: restaurant.name,
        opensAt: restaurant.opens_at,
        userRating: restaurant.user_rating,
      }))
      this.setState({
        restaurantsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  changeSortBy = activeOptionId => {
    this.setState({activeOptionId}, this.getRestaurants)
  }

  renderRestaurantsListView = () => {
    const {restaurantsList, activeOptionId} = this.state

    return (
      <div className="restaurants-container">
        <h1 className="main-heading">Popular Restaurants</h1>
        <div className="para-sorted-container">
          <p className="para">
            Select Your favourite restaurant special dish and make your day
            happy...
          </p>
          <SortBy
            activeOptionId={activeOptionId}
            sortByOptions={sortByOptions}
            changeSortBy={this.changeSortBy}
          />
        </div>
        <div>
          <hr />
        </div>
        <ul className="restaurants-list">
          {restaurantsList.map(eachRestaurant => (
            <RestaurantCard
              restaurantData={eachRestaurant}
              key={eachRestaurant.id}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#F7931E" height="50" width="50" />
    </div>
  )

  renderRestaurants = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderRestaurantsListView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="restaurant-list-container">
        {this.renderRestaurants()}
      </div>
    )
  }
}

export default RestaurantList
