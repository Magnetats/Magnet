import React from 'react'
import styled from 'styled-components'

import { appGrayLight } from '../../../../styling/theme/variables'
import Logo from '../../../Logo'
import Logout from './Logout'

const TopNavDiv = styled.div`
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

const TopNav = () => {
  return (
    <TopNavDiv>
      <div className="ui top fixed menu">
        <div className="item" id="logo-box">
          <Logo />
        </div>
        <Logout />
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
    </TopNavDiv>
  )
}

export default TopNav
