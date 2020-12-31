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
	const [zipCode, setZipCode] = useState("");
	const [website, setWebsite] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [avatar, setAvatar] = useState("");

	function handleSubmit() {
		const data = {
			businessName: businessName,
			title: title,
			description: description,
			city: city,
			country: country,
			zipCode: zipCode,
			website: website,
			phoneNumber: phoneNumber,
			avatar: avatar
		};

		actions.createUser(data);
	}
	return;
	<div className="container">
		<h3>
			Bienvenido, en ChipMarket apoyamos al comercio local, por eso hemos creado este espacio para ti y tu
			negocio.
			<small className="text-muted">Por favor, rellene este formulario</small>
		</h3>
		<form>
			<div className="form-group">
				<label htmlFor="inputBusinessName">Nombre del negocio</label>
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
		</form>
	</div>;
};
