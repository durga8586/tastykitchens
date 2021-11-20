import {Component} from 'react'
import {
  FaPinterestSquare,
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
} from 'react-icons/fa'

import './index.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="logo-name-container">
          <img
            src="https://res.cloudinary.com/durga858/image/upload/v1635826384/tastykitchen/Vector_s0vmyc.svg"
            className="footer-logo"
            alt="website-footer-logo"
          />
          <h1 className="footer-website-heading">Tasty Kitchens</h1>
        </div>
        <p className="footer-para">
          The only thing we are serious about is food. Contact us on
        </p>
        <div className="react-icons-container">
          <div testid="pintrest-social-icon" className="icon-container">
            <FaPinterestSquare className="icon" />
          </div>
          <div testid="instagram-social-icon" className="icon-container">
            <FaInstagram className="icon" />
          </div>
          <div testid="twitter-social-icon" className="icon-container">
            <FaTwitter className="icon" />
          </div>
          <div testid="facebook-social-icon" className="icon-container">
            <FaFacebookSquare className="icon" />
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
