import React, { Component } from "react";
import "./App.css";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navBar";

export default class App extends Component {
	render() {
		return (
			<>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route exact path="/rooms/" component={Rooms}></Route>
					<Route exact path="/rooms/:slug" component={SingleRoom}></Route>
					<Route component={Error}></Route>
				</Switch>
			</>
		);
	}
}
