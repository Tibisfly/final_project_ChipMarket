import React from "react";
import ReactDOM from "react-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Markers from "./markers.js";
import "leaflet/dist/leaflet.css";

const MapTest = () => {
	const position = [40.430598, -3.682766];
	const accessToken = "pk.eyJ1IjoidGliaXNmbHkiLCJhIjoiY2trb3A4anl0MTR3dDJ2bnNncGk0N3c5ZiJ9.B2k8Sf9RSNEz94DqpNJmkw";

	return (
		<div className="map-test">
			<MapContainer center={position} zoom={13} scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Markers />
				{/* <Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker> */}
			</MapContainer>
		</div>
	);
};

export default MapTest;
