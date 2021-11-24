import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="main-container">
        <div className="login-form-container">
          <form className="form-container" onSubmit={this.submitForm}>
            <img
              src="https://res.cloudinary.com/durga858/image/upload/v1635826368/tastykitchen/Group_7420_jim7mq.svg"
              alt="website logo"
              className="website-logo"
            />
            <h1 className="website-heading">Tasty Kitchens</h1>
            <h1 className="login-name">Login</h1>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          </form>
        </div>
        <div className="img-container">
          <img
            src="https://res.cloudinary.com/durga858/image/upload/c_scale,w_705/v1635826129/tastykitchen/Rectangle_1456_fl7mpr.jpg"
            className="website-image"
            alt="website login"
          />
          <img
            src="https://res.cloudinary.com/durga858/image/upload/v1635826205/tastykitchen/Rectangle_1457_emmg54.jpg"
            className="mobile-website-image"
            alt="website login"
          />
        </div>
      </div>
    )
  }
}

export default Login
