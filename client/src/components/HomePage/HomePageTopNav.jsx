import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { appGrayLight } from '../../styling/theme/variables'
import Logo from '../Logo'
import RegisterUser from '../Registration/RegisterUser'

const HomePageTopNavDiv = styled.div`
  &&& a {
    color: ${appGrayLight}
  }
  .ui.top.fixed.menu {
    height: 55px;
  }
  #logo-box {
    width: 15%;
    min-width: 213px;
    padding-left: 2%;
  }
`

const HomePageTopNav = () => {
  return (
    <HomePageTopNavDiv>
      <div className="ui top fixed menu">
        <div className="item" id="logo-box">
          <Logo />
        </div>
        <Link to="/register">
          <a className="item app-top-menu-text">Register</a>
        </Link>
        <Link to="/login">
          <a className="item app-top-menu-text">Login</a>
        </Link>
        {/* <a className="item">Testimonials</a>
        <a className="item" position="right">Sign-in</a> */}
      </div>
      <div className="ui bottom fixed menu">
        <div className="item">
          <img src="/images/logo.png" />
        </div>
        <a className="item">Hey Girl Hey</a>
        <a className="item">Testimonials</a>
        <a className="item">Sign-in</a>
      </div>
      <p />
      <p />
    </HomePageTopNavDiv >
  )
}

export default HomePageTopNav
