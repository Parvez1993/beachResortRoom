import React from "react";
import RoomFitler from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "./Loading";
import { withRoomConsumer } from "../Context";
//Parent class -> RoomFilter and Roomlist is child class
function RoomContainer({ context }) {
	//console.log(context);
	const { loading, rooms, sortedRooms } = context;
	if (loading) {
		return <Loading />;
	}
	return (
		<>
			<div>
				Hello from the Room Container
				<RoomFitler rooms={rooms} />
				<RoomList rooms={sortedRooms} />
			</div>
		</>
	);
}
export default withRoomConsumer(RoomContainer);
