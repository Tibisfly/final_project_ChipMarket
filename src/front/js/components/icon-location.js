import React from "react";
import L from "leaflet";

const IconLocation = L.icon({
	iconUrl: require("../../img/icon.png"),
	iconRetinaUrl: require("../../img/icon.png"),
	iconAnchor: null,
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: [35, 35],
	className: "leaflet-venue-icon"
});

export default IconLocation;
