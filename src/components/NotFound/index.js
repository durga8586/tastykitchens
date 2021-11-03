import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="main-container">
      <div className="not-found-container">
        <img
          src="https://res.cloudinary.com/durga858/image/upload/v1635826334/tastykitchen/erroring_1_ncpxoe.jpg"
          className="not-found-image"
          alt="not found"
        />
        <h1 className="not-found-heading">Page Not Found</h1>
        <p className="not-found-para">
          we are sorry, the page you requested could not be found <br />
          please go back to home page
        </p>
        <Link to="/">
          <button type="button" className="home-button">
            Home Page
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default NotFound
