import React, { Component } from 'react'
import axios from 'axios'
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
      // lastName: '',
      email: '',
      username: '',
      userRole: '',
      password: '',
      password2: '',
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
    const {
      firstName, lastName, email, username, userRole, password, password2,
    } = this.state
    axios
      .post('/users/register', {
        firstName,
        lastName,
        username,
        email,
        password,
        password2,
        userRole,
      })
      .then((response) => {
        console.log(response)
      })
      .catch((err)=> {
        console.log(err)
      })
    this.setState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      password2: '',
      userRole: '',
    })
  }

  render() {
    const {
      firstName, lastName, email, username, userRole, password, password2,
    } = this.state
    const { value } = this.state

    return (
      <div className="ui text container">
        <Form>
          <Form.Group>
            <Form.Input
              fluid
              label="First name"
              placeholder="First name"
            />
            <Form.Input
              fluid
              label="Last name"
              placeholder="Last name"
            />
            <Form.Input
              fluid
              label="User Name"
              placeholder="User Name"
            />
            <Form.Input
              fluid
              label="Company Name"
              placeholder="Company Name"
            />
            <Form.Input
              fluid
              label="Password"
              placeholder="Password"
            />
            <Form.Input
              fluid
              label="Repeat Password"
              placeholder="Repeat Password"
            />
            <Form.Select
              fluid
              label="I am a"
              options={options}
              placeholder="Super Hero"
            />
          </Form.Group>
          {/* <Form.Group inline>
            <label>Size</label>
            <Form.Radio
              label="Small"
              value="sm"
              checked={value === "sm"}
              onChange={this.handleChange}
            />
            <Form.Radio label='Medium' value='md' checked={value === 'md'} onChange={this.handleChange} />
            <Form.Radio label='Large' value='lg' checked={value === 'lg'} onChange={this.handleChange} />
          </Form.Group> */}
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Form.Button>Submit</Form.Button>
        </Form>
        {/* <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange} />
            <Form.Input placeholder='Email' name='email' value={email} onChange={this.handleChange} />
            <Form.Input placeholder='Username' name='username' value={username} onChange={this.handleChange} />
            <Form.Input placeholder='Password' name='password' value={password} onChange={this.handleChange} />
            <Form.Input placeholder='Confirm Password' name='password2' value={password2} onChange={this.handleChange} />
            <Form.Button content='Submit' />
          </Form.Group>
        </Form> */}
      </div>
    )
  }
}

export default RegisterUser

// import React, { Component } from 'react'
// import { Popup, Button, Header, Image, Modal, Form, Message } from 'semantic-ui-react'

// class RegisterUser extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       open: false,
//     }
//      this.handleItemClick = this.handleItemClick.bind(this)
//    }

//   show = dimmer => () => this.setState({ dimmer, open: true })
//   close = () => this.setState({ open: false })

//   render() {
//     const { open, dimmer } = this.state

//     return (
//       <div>
//         {/* <Button onClick={this.show(true)}>Default</Button>
//         <Button onClick={this.show('inverted')}>Inverted</Button> */}
//         <Button onClick={this.show('blurring')}>Blurring</Button>
//         <Popup trigger={<Button onClick={this.show(false)}>None</Button>}>
//           <Popup.Header>Heads up!</Popup.Header>
//           <Popup.Content>
//             By default, a Modal closes when escape is pressed or when the dimmer is
//             clicked. Setting the dimmer to "None" (dimmer={'{'}false{'}'}) means that there is no
//             dimmer to click so clicking outside won't close the Modal. To close on
//             outside click when there's no dimmer, you can pass the "closeOnDocumentClick" prop.
//           </Popup.Content>
//         </Popup>

//         <Modal dimmer={dimmer} open={open} onClose={this.close}>
//           <Modal.Header>Select a Photo</Modal.Header>
//           <Modal.Content image>
//             <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
//             <Modal.Description>
//               <Header>Default Profile Image</Header>
//               <p>We've found the following gravatar image associated with your e-mail address.</p>
//               <p>Is it okay to use this photo?</p>
//             </Modal.Description>
//           </Modal.Content>
//           <Modal.Actions>
//             <Button color='black' onClick={this.close}>
//               Nope
//             </Button>
//             <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
//           </Modal.Actions>
//         </Modal>
//       </div>
//     )
//   }
// }

// export default RegisterUser


// const FormExampleSuccess = () => (
//   <Form success>
//     <Form.Input label='Email' placeholder='joe@schmoe.com' />
//     <Message
//       success
//       header='Form Completed'
//       content="You're all signed up for the newsletter"
//     />
//     <Button>Submit</Button>
//   </Form>
// )

// export default FormExampleSuccess