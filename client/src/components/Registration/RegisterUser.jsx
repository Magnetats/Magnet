import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, withRouter } from 'react-router-dom'
import { Popup, Button, Header, Image, Modal, Checkbox, Form, Message } from 'semantic-ui-react'

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
      isLoggedIn: false,
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
    axios
      .post('/api/signup', {
        firstName, lastName, username, email, password, password2, companyName, userRole,
      })
      .then((response) => {
        console.log('data back from server received in reg form', response.config.data)
        console.log('this is my props from server coming back after data', this.props.history)
        this.setState({
          isLoggedIn: true,
        })
        history.push('/home')
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
      firstName, lastName, username, email, password, password2, companyName, userRole,
    } = this.state

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
