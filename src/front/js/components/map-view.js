import React from "react";
import ReactDOM from "react-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapTest = () => {
	const position = [51.505, -0.09];
	const accessToken = "pk.eyJ1IjoidGliaXNmbHkiLCJhIjoiY2trb3A4anl0MTR3dDJ2bnNncGk0N3c5ZiJ9.B2k8Sf9RSNEz94DqpNJmkw";

	return (
		<div className="map-test">
			<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default MapTest;
