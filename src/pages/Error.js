import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Error() {
	return (
		<Hero>
			<Banner title="Oops! 404 Not Found">
				<Link to="/" className="btn-primary">
					Go Back
				</Link>
			</Banner>
		</Hero>
	);
}
