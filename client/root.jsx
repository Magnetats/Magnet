import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import UserHome from './src/components/UserHome/UserHome.jsx'


const Root = () => (
	<Switch>
		<Route exact path="/" component={UserHome} />
		{/* <Route path="/userhome" component={UserHome} /> */}
		{/* <Route path="/goal/:id" component={CheckIn} /> */}
		{/* <Route component={NotFound} /> */}
	</Switch>
);

export default Root;
