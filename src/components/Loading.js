import React, { Component } from "react";
import LoadingScreen from "../images/gif/loading-gear.gif";

export default class Loading extends Component {
	render() {
		return (
			<div className="loading">
				<h3>loading Screen</h3>
				<img src={LoadingScreen} alt="Loading"></img>
			</div>
		);
	}
}
