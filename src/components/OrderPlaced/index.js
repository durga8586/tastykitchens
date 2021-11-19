import {Link} from 'react-router-dom'

import './index.css'

const OrderPlaced = () => {
  localStorage.removeItem('cartData')

  return (
    <div className="order-placed-container">
      <h1 className="payment-heading">Payment Successful</h1>
      <p className="wishing-text">
        Thank you for ordering <br />
        Your payment is successfully completed.
      </p>
      <Link to="/">
        <button className="home-button3" type="button">
          Go To Home Page
        </button>
      </Link>
    </div>
  )
}

export default OrderPlaced
