import React, { Component } from "react";
import Title from "./Title";
import {
	FaPlane,
	FaGlassMartiniAlt,
	FaCoffee,
	FaShuttleVan,
} from "react-icons/fa";

export default class Services extends Component {
	state = {
		services: [
			{
				icon: <FaPlane />,
				title: "Free Tour",
				info:
					"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec",
			},
			{
				icon: <FaGlassMartiniAlt />,
				title: "Get Free CockTail",
				info:
					"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec",
			},
			{
				icon: <FaCoffee />,
				title: "Free Coffee",
				info:
					"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec",
			},
			{
				icon: <FaShuttleVan />,
				title: "Free-Shuttle",
				info:
					"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec",
			},
		],
	};

	render() {
		return (
			<section className="services">
				<Title title="services" />
				<div className="services-center">
					{this.state.services.map((item, index) => {
						return (
							<article key={index} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}
