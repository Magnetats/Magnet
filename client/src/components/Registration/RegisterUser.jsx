import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, withRouter } from 'react-router-dom'
import { Popup, Button, Header, Image, Modal, Checkbox, Form, Message } from 'semantic-ui-react'

import Auth from '../Protected/Auth'

const options = [
  { key: 'r', text: 'Recruiter', value: 'Recruiter' },
  { key: 'hm', text: 'Hiring Manager', value: 'Hiring Manager' },
  { key: 'tm', text: 'Talent Manager', value: 'Talent Manager' },
]

class RegisterUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      password2: '',
      companyName: '',
      userRole: '',
      redirectToReferrer: false,
      userData: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e, { name, value }) {
    this.setState({
      [name]: value,
    })
    console.log(value)
  }

  handleSubmit() {
    const {
      firstName, lastName, username, email, password, password2, companyName, userRole,
    } = this.state
    const { history } = this.props
    history.listen((e) => {
      console.log('listen to your history in registration', e.pathname)
    })

    axios({
      method: 'post',
      data: {
        firstName, lastName, username, email, password, password2, companyName, userRole,
      },
      url: '/api/signup',
      // responseType: 'stream'
      withCredentials: true,
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      // .then(function (response) {
      //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
      // })
      .then((response) => {
        console.log('in register is loggedin 1st', this.state.isLoggedIn)
        console.log('all data back from server in reg form after auth', response.data)
        console.log('user session back from server received in reg form', response.data.myRegSesh)
        console.log('this is my props from server coming back after data', this.props.history)
        console.log('what is my response status in reg', response.status)
        if (response.data.authenticated) {
          Auth.authenticate(() => {
            this.setState(() => ({
              redirectToReferrer: true,
              // userData: response.data.user,
            }))
          })
          // this.setState({
          //   redirectToReferrer: true,
          //   userData: response.data.user,
          // })
          // Auth.authenticate(response.data.authenticated)
          console.log('in login is loggedin 2nd after state update', this.state.redirectToReferrer)
          // history.push('/home')
          // } else {
          //   history.push('/login')
          }
        // if (response.status === 200 && response.data.myRegSesh) {
        //   this.setState({
        //     isLoggedIn: true,
        //     userData: response.data,
        //   })
        //   console.log('in register is loggedin 2nd after state update', this.state.isLoggedIn)
        //   history.push('/home')
        // } else {
        //   history.push('/register')
        // }
      })
      .catch((err) => {
        console.log(err)
      })
    this.setState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      password2: '',
      companyName: '',
      userRole: '',
    })
  }

  render() {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      password2,
      companyName,
      userRole,
      redirectToReferrer,
    } = this.state
    const { from } = this.props.location.state || { from: { pathname: '/home' } }

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }
    console.log('rendingin in login form is logged in when going to page?', redirectToReferrer)
    return (
      <div className="ui text container">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              fluid
              label="First Name"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
              width={2}
            />
            <Form.Input
              fluid
              label="Last Name"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
              width={2}
            />
            <Form.Input
              fluid
              label="Email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleChange}
              width={3}
            />
            <Form.Input
              fluid
              label="Username"
              placeholder="Username"
              name="username"
              value={username}
              onChange={this.handleChange}
              width={2}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              fluid
              type="password"
              label="Password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              type="password"
              label="Confirm Password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              fluid
              label="Company Name"
              placeholder="Company Name"
              name="companyName"
              value={companyName}
              onChange={this.handleChange}
            />
            <Form.Select
              fluid
              label="I am a"
              options={options}
              placeholder="Super Hero"
              name="userRole"
              value={userRole}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Form.Button
            type="submit"
            value="Register"
          >Register
          </Form.Button>
        </Form>
      </div>
    )
  }
}

export default withRouter(RegisterUser)
