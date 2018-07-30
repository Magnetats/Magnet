import React from 'react'

const Auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

export default Auth

// class LeftNav extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       activeItem: 'home',
//       isAuthenticated: false,
//       userData: '',
//     }
//     console.log('props at top of home coming from Login', this.props)
//     this.handleItemClick = this.handleItemClick.bind(this)
//   }