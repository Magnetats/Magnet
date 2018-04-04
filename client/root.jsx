import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import LeftNav from './src/components/UserHome/LeftNav/LeftNav.jsx'


const Root = () => (
	<Switch>
		<Route exact path="/" component={LeftNav} />
		{/* <Route path="/userhome" component={UserHome} /> */}
		{/* <Route path="/goal/:id" component={CheckIn} /> */}
		{/* <Route component={NotFound} /> */}
	</Switch>
);

export default Root;
