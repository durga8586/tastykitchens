import {Link, withRouter} from 'react-router-dom'

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
          <Link to="/">
            <h1 className="website-name">Tasty Kitchens</h1>
          </Link>
        </div>
        <div className="route-container">
          <ul className="nav-btn-container">
            <Link to="/">
              <li className="home-nav">Home</li>
            </Link>
            <Link to="/cart">
              <li className="home-nav">Cart</li>
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
      </div>
    </nav>
  )
}

export default withRouter(Header)
