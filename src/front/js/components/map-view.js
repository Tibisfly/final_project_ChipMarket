import React, { useState } from "react";
import ReactDOM, { Link } from "react-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerImg from "../../img/marker.png";
import L from "leaflet";

const MapTest = () => {
	const markerIcon = new L.icon({
		iconUrl: require({MarkerImg}),
		shadowSize: [35, 45],
		iconSize: [40, 40],
		iconAnchor: [17, 46],
		popupAnchor: [0, -46],
		className: "leaflet-venue-icon"
	});

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
			<MapContainer center={{ lat: 40.42678727667202, lng: -3.6672587479438 }} zoom={17} scrollWheelZoom={false}>
				<TileLayer
					attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=wHKJGX6RktBjxZuy5hCf"
				/>
				<Marker position={{ lat: 40.42678727667202, lng: -3.6672587479438 }} icon={markerIcon}>
					<Popup>
						<b>Ferretería San Diego.</b>
						<br />
						<b>Paseo Marqués de Zafra, 9. Madrid</b>
					</Popup>
				</Marker>
				<Marker position={{ lat: 40.426785832905, lng: -3.668250674020496 }} icon={markerIcon}>
					<Popup>
						<b>Panadería Panarte.</b>
						<br />
						<b>Paseo Marqués de Zafra, 2. Madrid</b>
					</Popup>
				</Marker>
				<Marker position={{ lat: 40.42579783696785, lng: -3.6635803495832144 }} icon={markerIcon}>
					<Popup>
						<b>Ay Madre, La Fruta.</b>
						<br />
						<b>Paseo Marques de Zafra 39. Madrid</b>
					</Popup>
				</Marker>
				<Marker position={{ lat: 40.42536300300019, lng: -3.665367014001046 }} icon={markerIcon}>
					<Popup>
						<b>Pollera Santa Paca.</b>
						<br />
						<b>Paseo Marques de Zafra 16. Madrid</b>
					</Popup>
				</Marker>
				<Marker position={{ lat: 40.42538750501744, lng: -3.665383107254526 }} icon={markerIcon}>
					<Popup>
						<b>SBH Peluquería Unisex</b>
						<br />
						<b>Calle Lanuza, 7. Madrid</b>
					</Popup>
				</Marker>
				<Marker position={{ lat: 40.42679541886236, lng: -3.6656256360901383 }} icon={markerIcon}>
					<Popup>
						<b>Papelería Borrego.</b>
						<br />
						<b>Calle Rafael Juan y Seva, 5. Madrid</b>
					</Popup>
				</Marker>
				<Marker position={{ lat: 40.411219737038834, lng: -3.694624972985061 }} icon={markerIcon}>
					<Popup>
						<b>El Florista</b>
						<br />
						<b>Calle Almadén 12. Madrid</b>
					</Popup>
				</Marker>
				<Marker position={{ lat: 40.42642186341579, lng: -3.663984186477782 }} icon={markerIcon}>
					<Popup>
						<b>Talleres Díaz Auto.</b>
						<br />
						<b>Calle del Vizconde de Matamala, 14. Madrid</b>
					</Popup>
				</Marker>
				<Marker position={{ lat: 40.42670859512874, lng: -3.667701357642063 }} icon={markerIcon}>
					<Popup>
						<b>El Perro Gamberro. Tabernita</b>
						<br />
						<b>Calle Benito de Castro, nº 4. Madrid</b>
					</Popup>
				</Marker>
				<Marker position={{ lat: 40.42857068580306, lng: -3.6667143046709185 }} icon={markerIcon}>
					<Popup>
						<b>Pinturas Pami.</b>
						<br />
						<b>Calle Rufino Blanco, 7. Madrid</b>
					</Popup>
				</Marker>
				<Marker position={{ lat: 40.42622040262896, lng: -3.6660833796771173 }} icon={markerIcon}>
					<Popup>
						<b>Pollera Santa Paca.</b>
						<br />
						<b>Paseo Marques de Zafra 2. Madrid</b>
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default MapTest;
