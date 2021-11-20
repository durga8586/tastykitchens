import {Link} from 'react-router-dom'

import './index.css'

const EmptyCartView = () => (
  <div className="empty-cart-view-container">
    <img
      src="https://res.cloudinary.com/durga858/image/upload/v1635826353/tastykitchen/cooking_1_1_ylqsrx.jpg"
      className="empty-image"
      alt="empty cart"
    />
    <h1 className="empty-heading">No Order Yet!</h1>
    <p className="empty-para">
      Your cart is empty. Add something from the menu.
    </p>
    <Link to="/">
      <button type="button" className="home-button">
        Order Now
      </button>
    </Link>
  </div>
)

export default EmptyCartView
