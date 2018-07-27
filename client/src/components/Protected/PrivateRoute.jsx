import React from 'react'
import { BrowserRouter as Router, Route, withRouter, Redirect } from 'react-router-dom'

//I am trying to capture logged in state from this file I think normally this would be stored in Redux but I'm not there yet.
// import Auth from './Auth'
const Auth = {
  isAuthenticated: true,
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log('logging from private route Component t is auth t props', Component)
  return (
    <Route
      {...rest}
      render={props =>
        Auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

export default withRouter(PrivateRoute)
