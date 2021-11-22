import {Component} from 'react'
import Slider from 'react-slick'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import CarousalItem from '../CarousalItem'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

export default class ReactSlider extends Component {
  state = {
    carousalList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getCarousals()
  }

  getCarousals = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/restaurants-list/offers'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.offers.map(offer => ({
        id: offer.id,
        imageUrl: offer.image_url,
      }))
      this.setState({
        carousalList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
  }

  renderCarousalsListView = () => {
    const {carousalList} = this.state
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="offer-container">
        <Slider {...settings}>
          {carousalList.map(eachCarousal => (
            <CarousalItem carousal={eachCarousal} key={eachCarousal.id} />
          ))}
        </Slider>
      </div>
    )
  }

  renderLoadingView = () => (
    <div
      testid="restaurants-offers-loader"
      className="carousal-loader-container"
    >
      <Loader type="ThreeDots" color="#f7931e" height="50" width="50" />
    </div>
  )

  renderCarousals = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCarousalsListView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return <div>{this.renderCarousals()}</div>
  }
}
