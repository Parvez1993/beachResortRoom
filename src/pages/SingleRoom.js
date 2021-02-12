import React, { Component } from "react";
import defaultBcg from "../images/defaultBcg.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slug: this.props.match.params.slug,
			defaultBcg,
		};
	}
	static contextType = RoomContext;

	render() {
		const { getRoom } = this.context;
		const room = getRoom(this.state.slug);
		console.log(room);
		if (!room) {
			return (
				<div className="error">
					<h3>No Room with this name found</h3>
					<Link to="/rooms" className="btn btn-primary">
						Go back to Rooms
					</Link>
				</div>
			);
		}
		const {
			name,
			description,
			capacity,
			size,
			extras,
			price,
			breakfast,
			pets,
			images,
		} = room;
		const [mainImg, ...restImages] = images;
		return (
			<>
				<StyledHero img={images[0]}>
					<Banner title={`${name} room`}>
						<Link to="/rooms/" className="btn-primary">
							Back to Rooms
						</Link>
					</Banner>
				</StyledHero>
				<section className="single-room">
					<div className="single-room-images">
						{restImages.map((image, i) => (
							<img key={i} src={image} alt={name} />
						))}
					</div>
					<div className="single-room-info">
						<article className="desc">
							<h3>details</h3>
							<p>{description}</p>
						</article>
						<article className="info">
							<h3>Info</h3>
							<h6>Price: ${price}</h6>
							<h6>Size: {size} SQFT</h6>
							<h6>
								Capacity:{" "}
								{capacity > 1 ? `${capacity} people` : `${capacity} person`}
							</h6>
							<h6>Pets: {pets ? `allowed` : `not allowed`}</h6>
							<h6>{breakfast && `Breakfast: free breakfast`}</h6>
						</article>
					</div>
					<section className="room-extras">
						<h6>Extras</h6>
						<ul className="extras">
							{extras.map((item, i) => {
								return <li key={i}>-{item}</li>;
							})}
						</ul>
					</section>
				</section>
			</>
		);
	}
}
