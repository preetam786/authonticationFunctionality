import {withRouter} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class LogoutButton extends Component {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <button type="button" className="button" onClick={this.onClickLogout}>
        Logout
      </button>
    )
  }
}

export default withRouter(LogoutButton)
