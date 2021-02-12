import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class navBar extends Component {
	state = {
		isOpen: false,
	};
	toggleOpen = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};
	render() {
		return (
			<nav className="navbar">
				<div className="nav-center">
					<div className="nav-header">
						<Link to="/">
							<img src={logo} alt="Unable to Load"></img>
						</Link>
						<button type="button" className="nav-btn" onClick={this.toggleOpen}>
							<FaBars className="nav-icon" />
						</button>
					</div>
					<ul
						className={this.state.isOpen ? " nav-links show-nav" : "nav-links"}
					>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/rooms">Rooms</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
