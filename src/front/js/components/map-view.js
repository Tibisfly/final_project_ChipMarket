import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapTest = () => {
	const markerIcon = new L.icon({
		iconUrl: require("../../img/marker.png"),
		shadowSize: [35, 45],
		iconSize: [40, 40],
		iconAnchor: [17, 46],
		popupAnchor: [0, -46],
		className: "leaflet-venue-icon"
	});

	// function handleMarkers() {
	// 	const commerces = [
	// 		{
	// 			businessName: "Ferretería Ayala",
	// 			lat: 40.42678727667202,
	// 			lng: -3.6672587479438
	// 		},
	// 		{
	// 			businessName: "Panarte",
	// 			lat: 40.426785832905,
	// 			lng: -3.668250674020496
	// 		}
	// 	];

	// 	return commerces.map((commerce, key) => {
	// 		<Marker position={{ lat: commerce.lat, lng: commerce.lng }} icon={markerIcon} key={key}>
	// 			<Popup>
	// 				<b>{commerce.businessName}</b>
	// 			</Popup>
	// 		</Marker>;
	// 	});
	// }

	const commerces = [
		{
			businessName: "Ferretería Ayala",
			lat: 40.42678727667202,
			lng: -3.6672587479438
		},
		{
			businessName: "Panarte",
			lat: 40.426785832905,
			lng: -3.668250674020496
		},
		{
			businessName: "Pollería",
			lat: 40.426583843681705,
			lng: -3.667354746751704
		},
		{
			businessName: "Abedul Celinda",
			lat: 40.42622040262896,
			lng: -3.6660833796771173
		},
		{
			businessName: "Gráficas Tirado S.L.",
			lat: 40.42671332840656,
			lng: -3.6655819712427915
		},
		{
			businessName: "Pinturas Pami S.L.",
			lat: 40.42834980654245,
			lng: -3.6667500732679974
		}
	];

	return (
		<div className="map-test">
			{/* <div>{center}</div> */}
			<MapContainer center={{ lat: 40.42678727667202, lng: -3.6672587479438 }} zoom={15} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=wHKJGX6RktBjxZuy5hCf"
				/>
				<Marker position={{ lat: 40.42678727667202, lng: -3.6672587479438 }} icon={markerIcon}>
					<Popup>
						<b>Ferretería Ayala</b>
					</Popup>
				</Marker>
				<Marker position={{ lat: 40.426785832905, lng: -3.668250674020496 }} icon={markerIcon}>
					<Popup>
						<b>Panarte</b>
					</Popup>
				</Marker>
				<Marker position={{ lat: 40.426583843681705, lng: -3.667354746751704 }} icon={markerIcon}>
					<Popup>
						<b>Pollería</b>
					</Popup>
				</Marker>
				<Marker position={{ lat: 40.42622040262896, lng: -3.6660833796771173 }} icon={markerIcon}>
					<Popup>
						<b>Abedul Celinda</b>
					</Popup>
				</Marker>
				<Marker position={{ lat: 40.42834980654245, lng: -3.6655819712427915 }} icon={markerIcon}>
					<Popup>
						<b>Grafica Tirado S.L.</b>
					</Popup>
				</Marker>
				<Marker position={{ lat: 40.42834980654245, lng: -3.6667500732679974 }} icon={markerIcon}>
					<Popup>
						<b>Pinturas Pami</b>
					</Popup>
				</Marker>
				{/* {commerces.map((commerce, key) => { */}
				{/* // <Marker position={{ lat: commerce.lat, lng: commerce.lng }} icon={markerIcon} key={key}>
					// 	<Popup>
					// 		<b>{commerce.businessName}</b>
					// 	</Popup>
					// </Marker>;

				// })} */}
			</MapContainer>
		</div>
	);
};

export default MapTest;
