import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";
//get all unique values

// get all unique values
const getUnique = (items, value) => {
	return [...new Set(items.map((item) => item[value]))];
};
export default function RoomFilter({ rooms }) {
	const context = useContext(RoomContext);
	//console.log(context);
	const {
		handleChange,
		type,
		capacity,
		price,
		minPrice,
		maxPrice,
		minSize,
		maxSize,
		breakfast,
		pets,
	} = context;
	// get unique types
	let types = getUnique(rooms, "type");
	// add all
	types = ["all", ...types];

	// map to jsx
	types = types.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});

	let people = getUnique(rooms, "capacity");
	// add all

	// map to jsx
	people = people.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});

	return (
		<section className="filter-container">
			<Title title="search rooms" />
			<form className="filter-form">
				<div className="form-group">
					<label htmlFor="type">Room Type</label>
					<select
						name="type"
						id="type"
						value={type}
						className="form-control"
						onChange={handleChange}
					>
						{types}
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="capacity">Capacity</label>
					<select
						name="capacity"
						id="capacity"
						value={capacity}
						className="form-control"
						onChange={handleChange}
					>
						{people}
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="price">Room Price ${price}</label>
					<input
						type="range"
						name="price"
						id="price"
						min={minPrice}
						max={maxPrice}
						value={price}
						className="form-control"
						onChange={handleChange}
					></input>
				</div>
				<div className="form-group">
					<label htmlFor="size">Room Size</label>
					<div className="size-inputs">
						<input
							type="number"
							name="minSize"
							id="size"
							onChange={handleChange}
							value={minSize}
							className="size-input"
						/>
						<input
							type="number"
							name="maxSize"
							id="size"
							onChange={handleChange}
							value={maxSize}
							className="size-input"
						/>
					</div>
				</div>
				<div className="form-groups">
					<div className="single-extra">
						<input
							type="checkbox"
							name="breakfast"
							id="breakfast"
							checked={breakfast}
							onChange={handleChange}
						/>
						<label htmlFor="breakfast">Breakfast</label>
					</div>
					<div className="single-extra">
						<input
							type="checkbox"
							name="pets"
							id="pets"
							checked={pets}
							onChange={handleChange}
						/>
						<label htmlFor="pets">Pets</label>
					</div>
				</div>
			</form>
		</section>
	);
}
