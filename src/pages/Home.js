import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import FeaturedRoom from "../components/FeaturedRooms";
import { Link } from "react-router-dom";
import Services from "../components/Services";

export default function Home() {
	return (
		<>
			<Hero>
				<Banner title="Luxurious Room" subtitle="Pay Half the Price">
					<Link to="/rooms/" className="btn-primary">
						Check Rooms
					</Link>
				</Banner>
			</Hero>
			<Services />
			<FeaturedRoom />
		</>
	);
}
