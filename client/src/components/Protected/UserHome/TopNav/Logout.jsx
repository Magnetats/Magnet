import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class Logout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const { username, password } = this.state
    const { history } = this.props
    history.listen((e) => {
      console.log('listen to your history in logout', e.pathname)
    })
    axios
      .get('/api/logout', {
        // username,
        // password,
      })
      .then((response) => {
        console.log('data back from server received after logout', response.config.data)
        console.log('this is my props from server coming back after data in logout', this.props)
        console.log('you should be logged out')
        history.push('/login')
      })
      .catch((err) => {
        console.log(err)
      })
    this.setState({ username: '', password: '' })
  }

  render() {
    return(
      <a
        className="item app-top-menu-text"
        onClick={this.handleClick}
      >Log out
      </a>
    )
  }
}

export default withRouter(Logout)
