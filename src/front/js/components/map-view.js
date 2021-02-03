import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapTest = () => {
	const position = [51.505, -0.09];

	return (
		<div className="map-test">
			<MapContainer center={position} zomm={13} scrollWheelZoom={false}>
				<TileLayer
					url="http://{s}.tile.cloudmade.com/"
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
