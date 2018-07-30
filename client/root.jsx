import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserHome from './src/components/Protected/UserHome/LeftNav/LeftNav'
import MyJobs from './src/components/Protected/UserHome/LeftNav/HomeDashboard/Jobs/Jobs'
import HomePage from './src/components/HomePage/HomePage'
import RegisterUser from './src/components/Registration/RegisterUser'
import Login from './src/components/Registration/Login'
import PrivateRoute from './src/components/Protected/PrivateRoute'
import PageNotFound from './src/components/PageNotFound'

const Root = () => (
  <Switch>
    <Route path="/" component={HomePage} exact={true} />
    <Route path="/register" component={RegisterUser} />
    <Route path="/login" component={Login} />
    {/* <Route path="/home" component={UserHome} /> */}
    <Route path="/jobs" component={MyJobs} />
    <PrivateRoute path="/home" component={UserHome} />
    <Route component={PageNotFound} />
    {/* <Route path="/userhome" component={UserHome} /> */}
    {/* <Route path="/goal/:id" component={CheckIn} /> */}
    {/* <Route component={NotFound} /> */}
  </Switch>
)

export default Root
// import React, { Component } from 'react'
// import { Switch, Route } from 'react-router-dom'
// import LeftNav from './src/components/UserHome/LeftNav/LeftNav'
// // import registerServiceWorker from './registerServiceWorker'
// // import Login from '../components/Login'
// // import Register from './components/Register'


// const Root = () => (
// 	<Switch>
// 		<Route exact path="/" component={LeftNav} />
// 		{/* <Route path="/userhome" component={UserHome} /> */}
// 		{/* <Route path="/goal/:id" component={CheckIn} /> */}
// 		{/* <Route component={NotFound} /> */}
// 	</Switch>
// );

// export default Root
