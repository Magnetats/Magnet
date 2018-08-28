import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import {
  Menu,
  Image,
  Icon,
  Button,
} from 'semantic-ui-react'

import { medBlue, darkerWhite, lightBlue, hangryGrayBtn } from '../../../../styling/theme/variables'
import AddProfilePhoto from '../../../../styling/images/Upload-Photo-Only.jpg'
import EditProfilePhoto from '../../../../styling/images/Upload-Photo-Hover-Dark.jpg'
// import ProfilePicHover from './ProfilePicHover'
import Auth from '../../../Protected/Auth'
import TopNav from '../TopNav/TopNav'
import HomeMain from './HomeDashboard/HomeMain'
import Jobs from './HomeDashboard/Jobs/Jobs'

class LeftNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'home',
      userData: '',
      isLoggedIn: false,
      isHovering: false,
    }
    console.log('props at top of home coming from Login', this.props)
    this.handleItemClick = this.handleItemClick.bind(this)
    this.handleMouseHover = this.handleMouseHover.bind(this)
    this.handleProfilePicChange = this.handleProfilePicChange.bind(this)
  }

  componentDidMount() {
    const { userData, isAuthenticated, activeItem } = this.state
    const { history } = this.props
    console.log('Auth state when home component loads', Auth.isAuthenticated)
    console.log('this is the props in home after comp did mount', this.props)
    history.listen((e) => {
      console.log('listen to your history in home', e.pathname)
    })
    axios({
      method: 'get',
      url: '/api/home',
      withCredentials: true,
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        const seshFromServer = response.data.myHomeSesh
        console.log('home page looking at all the user response data', response.data)
        console.log('home page looking at user response data', response.data.user)
        console.log('home page looking whether logged in from server data', response.data.authenticated)
        console.log('this is my props from server coming back after data in home', this.props)
        console.log('what is my response status in home', response.status)
        // this.setState({
        //   userData: response.data.user,
        // })
        if (response.data.authenticated) {
          Auth.authenticate(() => {
            this.setState(() => ({
              isLoggedIn: response.data.authenticated,
              userData: response.data.user,
            }))
          })
        }
        console.log('this state, you r logged in home after load true?', Auth.isAuthenticated)
        console.log('user data from the apps current state after everything in home', this.state.userData)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  handleItemClick(e, { name }) {
    this.setState({
      activeItem: name,
    })
  }
  handleProfilePicChange(e, {name}) {
    console.log('you are friggen awesome')
  }
  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }
  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    }
  }

  render() {
    const { visible, activeItem, isAuthenticated } = this.state
    const StyledWrapper = styled.div`
      margin-top: 415px;
    `
    const LeftNavMenu = styled(Menu)`
      #profile-pic-hover {
        color: #FFFFFF;
        bottom: 66px; /* For IE8 and earlier */
        opacity: 0.6;
      }
      #side-user-pic {
        min-width: 7em;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        color: #fff;
        background: 0 0;
        color: rgba(255, 255, 255, 0.9);
        height: auto;
        text-align: center;
        /* color: #1b1c1d; */
        display: block;
        background: 0 0;
        border: none;
        padding: 16px;
        :hover {
          background-color: transparent !important;
          color: white;
          min-width: 6.7em;
          height: 99px;
          cursor: pointer;
        }
      }
      &#leftNav {
        position: fixed;
      }
      &&&& {
        width: 0%;
        min-width: 7em;
        background-color: ${medBlue};
        position: relative;
        border-radius: 5px 5px 5px 5px;
        -webkit-box-shadow: 17px 25px 94px -10px rgba(48, 72, 97, 1);
        -moz-box-shadow: 17px 25px 94px -10px rgba(48, 72, 97, 1);

      }`;

    const LeftNavMenuItem = styled(Menu.Item)`
      &&&&&& {
        color: #F0F0F0;
        min-width: 6em;
        background-color: ${medBlue} !important;
        font-weight: 400;
        &:last-child {
          -webkit-box-shadow: rgba(223, 242, 250, 0.59);
          -moz-box-shadow: rgba(223, 242, 250, 0.59);
          box-shadow: rgba(223, 242, 250, 0.59);
        }
        &:before {
          -webkit-box-shadow: inset -1px 19px 21px -24px rgba(223, 242, 250, 0.59);
          -moz-box-shadow: inset -1px 19px 21px -24px rgba(223, 242, 250, 0.59);
          box-shadow: inset -1px 19px 21px -24px rgba(223, 242, 250, 0.59);
          padding-bottom: 70px;
          background: rgba(34,36,38,.0);
          &:hover {
            background-color: #FFFFFF !important;
            z-index: 555;
          }
        }
        &.active {
          height: 70px;
          font-size: 104%;
          font-weight: 900;
          background-color: #565656 !important;
          color: transparent !important;
          text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
          -webkit-background-clip: text;
          -moz-background-clip: text;
          background-clip: text;
          .left-nav-icons {
            background-color: #565656 !important;
            color: transparent !important;
            text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
            -webkit-background-clip: text;
            -moz-background-clip: text;
            background-clip: text;
          }
          &:after {
            height: 18px;
            width: 18px;
            background-color: #FFFFFF !important;
            left: 79px;
            &:hover {
              height: 18px;
              width: 18px;
              background-color: #FFFFFF !important;
            }
          }
          &:before {
            height: 70px;
            background-color: #FFFFFF !important;
            z-index: -1;
            &:hover {
              background-color: #FFFFFF !important;
            }
          }
        }
        &:hover {
          &:after {
            height: 18px;
            width: 18px;
            background-color: #FFFFFF !important;
          }
          background-color: #FFFFFF !important;
          font-size: 104%;
          font-weight: 900;
          background-color: #565656 !important;
          color: transparent !important;
          text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
          -webkit-background-clip: text;
          -moz-background-clip: text;
          background-clip: text;
          .left-nav-icons {
            background-color: #565656 !important;
            color: transparent !important;
            text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
            -webkit-background-clip: text;
            -moz-background-clip: text;
            background-clip: text;
          }
        }
      }`;
    return (
      <StyledWrapper>
        <TopNav />
        <LeftNavMenu
          id="leftNav"
          pointing
          vertical
          icon="labeled"
          inverted
          fixed="left"
        >
          <LeftNavMenuItem
            name="user pic"
            id="side-user-pic"
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
            onClick={this.handleProfilePicChange}
          >
            <Image src={AddProfilePhoto} size="large" circular />
            {
              this.state.isHovering &&
              <Image src={EditProfilePhoto} size="large" id="profile-pic-hover" circular />
            }
          </LeftNavMenuItem>
          <LeftNavMenuItem
            name="home"
            className="menu-names"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Icon
              name="home"
              className="left-nav-icons"
            />
              Home
          </LeftNavMenuItem>
          {/* <NavLink to="/jobs"> */}
            <LeftNavMenuItem
              name="jobs"
              className="menu-names"
              active={activeItem === 'jobs'}
              onClick={this.handleItemClick}
            >
              <Icon
                name="suitcase"
                className="left-nav-icons"
              />
              My Jobs
            </LeftNavMenuItem>
          {/* </NavLink> */}
          <LeftNavMenuItem
            name="candidates"
            className="menu-names"
            active={activeItem === 'candidates'}
            onClick={this.handleItemClick}
          >
            <Icon
              name="users"
              className="left-nav-icons"
            />
              Candidates
          </LeftNavMenuItem>
          <LeftNavMenuItem
            name="metrics"
            className="menu-names"
            active={activeItem === 'metrics'}
            onClick={this.handleItemClick}
          >
            <Icon
              name="bar chart"
              className="left-nav-icons"
            />
              Metrics
          </LeftNavMenuItem>
          {/* <LeftNavMenuItem
            className="menu-names"
          /> */}
        </LeftNavMenu>
        {this.state.activeItem === 'home' ? <HomeMain /> : null}
        {this.state.activeItem === 'jobs' ? <Jobs /> : null}
      </StyledWrapper>
    )
  }
}

export default withRouter(LeftNav)
