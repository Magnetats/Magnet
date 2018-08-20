import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

import { appGrayLight } from '../../../../styling/theme/variables'
import Logo from '../../../Logo'
import Logout from './Logout'

const TopNavDiv = styled.div`
  &&& a {
    color: ${appGrayLight}
  }
  .ui.top.fixed.menu {
    margin-top: 5px;
    height: 55px;
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
  .ui.bottom.fixed.menu {
    z-index: 102;
  }
  #logo-box {
    width: 15%;
    min-width: 213px;
    margin-left: 157px;
    margin-right: 58%;
  }
  i.setting.large.icon {
        margin: 18px;
  }
`

const TopNav = () => {
  return (
    <TopNavDiv>
      <div className="ui top fixed menu">
        <div className="item" id="logo-box">
          <Logo />
        </div>
        <Icon
          name="setting"
          size="large"
        />
        <Logout />
        {/* <a className="item">Testimonials</a>
        <a className="item" position="right">Sign-in</a> */}
      </div>
      <div className="ui bottom fixed menu">
        <div className="item">
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
