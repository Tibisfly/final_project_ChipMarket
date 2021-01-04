import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import { Register } from "./register.js";

// seguro que nos hacen reutilizar el form de Register, pero la verdad es que no se como hacerlo

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

	const params = useParams();

	const { store, actions } = useContext(Context);

	function handleSubmit() {
		const data = {
			ownerId: 8,
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
		console.log("Esto es data en form de commerce:", data);
		actions.createCommerce(data);
	}
	return (
		<div className="container">
			<h3>
				Bienvenido, en ChipMarket apoyamos al comercio local, por eso hemos creado este espacio para ti y tu
				negocio.
				<small className="text-muted">Por favor, rellene este formulario</small>
			</h3>
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
						onChange={event => setDescription(event.target.value)}></textarea>
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
				<button type="button" className="btn btn-info btn-block" onClick={handleSubmit}>
					{params.id ? "Update" : "Create"}
				</button>
			</form>
		</div>
	);
};
