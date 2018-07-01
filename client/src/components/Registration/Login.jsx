import React, { Component } from 'react'
import axios from 'axios'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      validForm: false,
      isLoggedIn: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e, { name, value }) {
    this.setState({
      [name]: value,
    })
  }

  handleSubmit() {
    const { username, password, validForm } = this.state
    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        validForm: false,
      })
    } else {
      this.setState({
        validForm: true,
      })
      const { history } = this.props
      history.listen((e) => {
        console.log('listen to your history in login', e.pathname)
      })
      axios
        .post('/api/login', {
          username,
          password,
        })
        .then((response) => {
          console.log('data back from server received in login form', response.config.data)
          console.log('this is my props from server coming back after data', this.props)
          this.state.isLoggedIn = true
          console.log('state shows logged in true', this.state.isLoggedIn)
          // alert(`Welcome, you are logged in.`)
          history.push('/home')
        })
        .catch((err) => {
          console.log(err)
        })
      this.setState({ username: '', password: '' })
    }

  }

  render() {
    const { username, password } = this.state
    return (
      <div className="ui text container">
        {/* <Prompt
          when={this.state.validForm !== true}
          message="If you leave this page you\'ll lose your data"
        /> */}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Username"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <Form.Input
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
            />
            <Form.Button
              type="submit"
              value="Log in"
            >Log in
            </Form.Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default Login
