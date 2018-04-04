import React from 'react'
import { Button } from 'semantic-ui-react'

class UserHome extends React.Component {
  constructor (props) {
    super (props)
  }

  render() {
    return (
    <div>
      <h1>Hello Universe Router's in</h1>
      <div>hey homeys</div>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
    </div>
    )
  }
}

export default UserHome
