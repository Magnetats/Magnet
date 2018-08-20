import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Auth from '../../../Protected/Auth'

class Logout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      validForm: false,
      redirectToReferrer: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const { history } = this.props
    history.listen((e) => {
      console.log('listen to your history in logout', e.pathname)
    })
    axios
      .get('/api/logout', {
      })
      .then((response) => {
        console.log('data back from server received after logout', response.config.data)
        console.log('this is my props from server coming back after data in logout', this.props)
        console.log('you should be logged out')
        if (!response.data.authenticated) {
          Auth.signout(() => {
            this.setState(() => ({
              redirectToReferrer: true,
              userData: response.data.user,
            }))
          })
          console.log('state of server return in logout', response.data.authenticated)
          history.push('/login')
        }
      })

      .catch((err) => {
        console.log(err)
      })
    this.setState({ username: '', password: '' })
  }

  render() {
    const StyledLogout = styled.a`
    &&&&& {
        position: unset;
      }
      &&&&:before {
        width: 0px !important;
        background: none !important;
      }
    `
    return (
      <StyledLogout
        position="right"
        className="ui item"
        onClick={this.handleClick}
      >Log out
      </StyledLogout>
    )
  }
}

export default withRouter(Logout)
