import React from 'react'

const Auth = () => ({
  isAuthenticated: false,
  authenticate(isAuthed) {
    this.isAuthenticated = isAuthed //change back to true
    setTimeout(isAuthed, 100) // fake async
  },
  signout(isAuthed) {
    this.isAuthenticated = false
    setTimeout(isAuthed, 100) // fake async
  },
})

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