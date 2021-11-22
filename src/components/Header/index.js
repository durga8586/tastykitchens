import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
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
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
        <div className="hum-burger-menu">
          <Popup
            style={{position: 'relative'}}
            modal
            trigger={
              <button
                type="button"
                data-testid="hamburgerIconButton"
                className="hum-burger-button"
              >
                <GiHamburgerMenu />
              </button>
            }
            className="popup-content"
          >
            {close => (
              <div className="modal-container">
                <ul className="nav-btn-container">
                  <Link className="home-nav" to="/" onClick={() => close()}>
                    <li>Home</li>
                  </Link>
                  <Link className="home-nav" to="/cart" onClick={() => close()}>
                    <li>Cart</li>
                  </Link>
                </ul>
                <button
                  type="button"
                  className="logout-button"
                  onClick={onClickLogout}
                >
                  Logout
                </button>
                <button
                  type="button"
                  testid="closeButton"
                  className="humburger-close-button"
                  onClick={() => close()}
                >
                  <IoMdClose size="30" color="#616e7c" />
                </button>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
