import React from "react";
import { Marker } from "react-leaflet";
import IconLocation from "./icon-location.js";

const Markers = () => {
	return (
		<div>
			<Marker position={{ lat: "40.430598", lng: "-3.682766" }} icon={IconLocation} />
		</div>
	);
};

export default Markers;
