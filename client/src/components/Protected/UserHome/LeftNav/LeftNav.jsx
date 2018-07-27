import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import {
  Menu,
  Image,
  Icon,
} from 'semantic-ui-react'

import { medBlue, darkerWhite, lightBlue } from '../../../../styling/theme/variables'
import TopNav from '../TopNav/TopNav'
import HomeMain from './HomeDashboard/HomeMain'
import Jobs from './HomeDashboard/Jobs/Jobs'

class LeftNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'home',
      isAuthenticated: false,
      userData: '',
    }
    console.log('props at top of home coming from Login', this.props)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  componentDidMount() {
    const { userData, isAuthenticated, activeItem } = this.state
    const { history } = this.props
    history.listen((e) => {
      console.log('listen to your history in home', e.pathname)
    })
    console.log('props once homepage is loaded', this.props)
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
        console.log('in homme this state loggedin 1st one?', this.state.isAuthenticated)
        console.log('data back from server received after home', seshFromServer)
        console.log('this is my props from server coming back after data in home', this.props)
        console.log('what is my response status in home', response.status)
        this.setState({
          isAuthenticated: response.data.authenticated,
          userData: response.data.user,
        })
        console.log('this state, you r logged in home after load true?', this.state.isAuthenticated)
        console.log('user data from the apps current state after everything in home', this.state.userData)
      })
      .catch((err) => {
        console.log(err)
      })
    // this.setState({ username: '', password: '' })
  }

  handleItemClick(e, { name }) {
    this.setState({
      activeItem: name,
    })
  }

  render() {
    const { visible, activeItem, isAuthenticated } = this.state
    const LeftNavMenu = styled(Menu)`
      #side-user-pic {
        min-width: 6em;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        color: #fff;
        background: 0 0;
        color: rgba(255, 255, 255, 0.9);
        height: auto;
        text-align: center;
        color: #1b1c1d;
        display: block;
        background: 0 0;
        border-top: none;
        border-right: none;
        border-radius: 5px 5px 0px 0px;
        padding: 16px;
        &:hover {
          color: ${medBlue};
        }
      }

      &&&& {
        width: 0%;
        min-width: 100px;
        /* margin-left: 2.4%; */
        /* top: 59px; */
        background-color: #fff;
        position: relative;
        margin-top: 50px;
        border-radius: 5px 5px 5px 5px;
        -webkit-box-shadow: 17px 25px 94px -10px rgba(48, 72, 97, 1);
        -moz-box-shadow: 17px 25px 94px -10px rgba(48, 72, 97, 1);
        box-shadow: 17px 25px 94px -10px rgba(48, 72, 97, 1);
      }`;

    const LeftNavMenuItem = styled(Menu.Item)`
      &&&&&& {
        color: #F0F0F0;
        background-color: ${medBlue} !important;
        font-weight: 400;
        &:last-child {
          border-radius: 0px 0px 5px 5px;
        }
        &:before {
          -webkit-box-shadow: inset -1px 19px 21px -24px rgba(223,242,250,0.59);
          -moz-box-shadow: inset -1px 19px 21px -24px rgba(223,242,250,0.59);
          box-shadow: inset -1px 19px 21px -24px rgba(223,242,250,0.59);
          padding-bottom: 70px;
        }
        &.active {
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
            background-color: white !important;
            &:hover {
              height: 18px;
              width: 18px;
              background-color: white !important;
            }
          }
        }
        &:hover {
          &:after {
            height: 18px;
            width: 18px;
            background-color: white !important;
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
      }`
    // if (!isAuthenticated) {
    //   return <Redirect to="/login" />
    // }
    return (
      <div id="sidebar-container">
        <TopNav />
        <LeftNavMenu
          pointing
          vertical
          icon="labeled"
          inverted
          className="side-nav-background"
        >
          <LeftNavMenuItem
            name="user pic"
            id="side-user-pic"
          >
            <Image src="https://pbs.twimg.com/profile_images/965410440120483840/ydq7NYb4_400x400.jpg" size='medium' circular />
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
        </LeftNavMenu>
        {this.state.activeItem === 'home' ? <HomeMain /> : null}
        {this.state.activeItem === 'jobs' ? <Jobs /> : null}
      </div>
    )
  }
}

export default withRouter(LeftNav)
