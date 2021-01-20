import React, { useContext, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Register } from "./register.js";
import "../../styles/forms.scss";

export const CommercesForm = function(props) {
	const [businessName, setBusinessName] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [streetName, setStreetName] = useState("");
	const [streetNumber, setStreetNumber] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [website, setWebsite] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [avatar, setAvatar] = useState("");

	const history = useHistory();

	const params = useParams();

	const { store, actions } = useContext(Context);

	function handleSubmit() {
		const data = {
			businessName: businessName,
			streetName: streetName,
			streetNumber: streetNumber,
			title: title,
			description: description,
			city: city,
			country: country,
			zipCode: zipCode,
			website: website,
			phoneNumber: phoneNumber,
			avatar: avatar
		};
		actions.createCommerce(data, () => {
			history.push("/feed-commerce");
		});
	}
	return (
		<div className="create-user">
			<h1 className="title">{false ? "Actualiza tu comercio" : "Crea tu comercio"}</h1>
			<form>
				<div className="form-group">
					<label htmlFor="inputBusinessName">Nombre del comercio</label>
					<input
						type="text"
						className="form-control"
						id="inputBusinessName"
						value={businessName}
						onChange={event => setBusinessName(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="inputTitle">Añada una palabra clave que lo defina</label>
					<input
						type="text"
						className="form-control"
						id="inputTitle"
						placeholder="Con esta palabra optimizarás tu búsqueda"
						value={title}
						onChange={event => setTitle(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Descripción de tu negocio:</label>
					<textarea
						className="form-control"
						id="description"
						rows="3"
						value={description}
						onChange={event => setDescription(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="inputCountry">País</label>
					<input
						type="text"
						className="form-control"
						id="inputCountry"
						value={country}
						onChange={event => setCountry(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="inputCity">Ciudad</label>
					<input
						type="text"
						className="form-control"
						id="inputCity"
						value={city}
						onChange={event => setCity(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="inputStreetName">Dirección Postal</label>
					<input
						type="text"
						className="form-control"
						id="inputStreetName"
						placeholder="Calle o avenida"
						value={streetName}
						onChange={event => setStreetName(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="inputStreetName">Número</label>
					<input
						type="text"
						className="form-control"
						id="inputStreetNumber"
						placeholder="Apartamento, suite, piso, chalet, edificio"
						value={streetNumber}
						onChange={event => setStreetNumber(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="inputZipCode">Código Postal</label>
					<input
						type="text"
						className="form-control"
						id="inputZipCode"
						placeholder="Código postal"
						value={zipCode}
						onChange={event => setZipCode(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="inputPhone">Número de contacto</label>
					<input
						type="text"
						className="form-control"
						id="inputPhone"
						value={phoneNumber}
						onChange={event => setPhoneNumber(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="inputWebsite">Página web</label>
					<input
						type="text"
						className="form-control"
						id="inputWebsite"
						value={website}
						onChange={event => setWebsite(event.target.value)}
					/>
				</div>
				<button type="button" className="btn btn-success btn-block" onClick={handleSubmit}>
					{params.id ? "Update" : "Create"}
				</button>
			</form>
		</div>
	);
};
