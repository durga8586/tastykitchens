import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import Cookies from 'js-cookie'

import './index.css'

class Header extends Component {
  state = {
    isMenuClicked: false,
  }

  onClickMenu = () => {
    this.setState(prevState => ({isMenuClicked: !prevState.isMenuClicked}))
  }

  onClickClose = () => {
    this.setState({isMenuClicked: false})
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {isMenuClicked} = this.state

    return (
      <>
        <nav className="nav-container">
          <div className="nav-content">
            <div className="logo-site-container">
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/durga858/image/upload/v1635826368/tastykitchen/Group_7420_jim7mq.svg"
                  className="website-logo4"
                  alt="website logo"
                />
              </Link>
              <Link className="website-name" to="/">
                <h1>Tasty Kitchens</h1>
              </Link>
            </div>
            <div className="route-container">
              <ul className="nav-btn-container">
                <Link to="/" className="home-nav">
                  <li>Home</li>
                </Link>
                <Link to="/cart" className="home-nav">
                  <li>Cart</li>
                </Link>
              </ul>
              <button
                type="button"
                className="logout-button"
                onClick={this.onClickLogout}
              >
                Logout
              </button>
            </div>
            <div className="hum-burger-menu">
              <button
                type="button"
                data-testid="hamburgerIconButton"
                className="hum-burger-button"
                onClick={this.onClickMenu}
              >
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        </nav>
        {isMenuClicked && (
          <div className="modal-container">
            <ul className="nav-btn-container">
              <Link className="home-nav" to="/">
                <li>Home</li>
              </Link>
              <Link className="home-nav" to="/cart">
                <li>Cart</li>
              </Link>
            </ul>
            <button
              type="button"
              className="logout-button"
              onClick={this.onClickLogout}
            >
              Logout
            </button>
            <button
              type="button"
              testid="closeButton"
              className="humburger-close-button"
              onClick={this.onClickClose}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
          </div>
        )}
      </>
    )
  }
}

export default withRouter(Header)
