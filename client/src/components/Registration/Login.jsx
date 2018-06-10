import React, { Component } from 'react'
import axios from 'axios'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
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
    const { username, password } = this.state
    axios
      .post('/testendpoint', {
        username,
        password,
      })
      .then((response) => {
        console.log('info back from server in login file', response.data)
      })
      .catch((err)=> {
        console.log(err)
      })
    this.setState({ username: '', password: '' })
  }

  render() {
    const { username, password } = this.state

    return (
      <div className="ui text container">
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
              value={password}
              onChange={this.handleChange}
            />
            <Form.Button
              type="submit"
              Value="Log in"
            >Log in
            </Form.Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default Login
