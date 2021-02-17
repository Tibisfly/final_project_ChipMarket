import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Register } from "./register.js";
import "../../styles/forms.scss";

export const CommercesForm = function(props) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
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
			history.push("/feed/commerce/" + store.commerce.id);
		});
	}

	return (
		<>
			<div className="container-fluid register-log-in">
				<div className="welcoming-register">
					{store.commerce.id
						? "ChipCommerce, por favor actualiza tus datos"
						: "Estás a un paso más cerca de obtener las mejores ofertas cerca de ti. Por favor, rellena tus datos y únete a la ChipFamily"}
				</div>
			</div>

			<div className="container create-user">
				<h1 className="title">{store.commerce.id ? "Actualiza tu comercio" : "Crea tu comercio"}</h1>
				<form>
					<div className="form-field ">
						<label htmlFor="inputFirstName">Nombre</label>
						<input
							type="text"
							className="form-control"
							id="inputFirstName"
							placeholder="First name"
							value={firstName}
							onChange={event => setFirstName(event.target.value)}
						/>
					</div>
					<div className="form-field">
						<label htmlFor="inputLastName">Apellidos</label>
						<input
							type="text"
							className="form-control"
							id="inputLastName"
							placeholder="Last name"
							value={lastName}
							onChange={event => setLastName(event.target.value)}
						/>
					</div>
					<div className="form-field">
						<label htmlFor="inputEmail">Correo electrónico</label>
						<input
							type="email"
							className="form-control "
							id="inputEmail"
							placeholder="Email"
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
					</div>
					<div className="form-field">
						<label htmlFor="inputPassword">Contraseña</label>
						<input
							type="password"
							className="form-control"
							id="inputPassword"
							placeholder="Password"
							value={password}
							onChange={event => setPassword(event.target.value)}
						/>
					</div>
					<div className="form-field">
						<label htmlFor="inputUsername">Nombre de usuario</label>
						<input
							type="text"
							className="form-control"
							id="inputUsername"
							placeholder="Username"
							value={username}
							onChange={event => setUsername(event.target.value)}
						/>
					</div>
					<div className="form-field">
						<label htmlFor="inputBusinessName">Nombre del comercio</label>
						<input
							type="text"
							className="form-control"
							id="inputBusinessName"
							value={businessName}
							onChange={event => setBusinessName(event.target.value)}
						/>
					</div>
					<div className="form-field">
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
					<div className="form-field">
						<label htmlFor="description">Descripción de tu negocio:</label>
						<textarea
							className="form-control"
							id="description"
							rows="3"
							value={description}
							onChange={event => setDescription(event.target.value)}
						/>
					</div>
					<div className="form-field">
						<label htmlFor="inputCountry">País</label>
						<input
							type="text"
							className="form-control"
							id="inputCountry"
							value={country}
							onChange={event => setCountry(event.target.value)}
						/>
					</div>
					<div className="form-field">
						<label htmlFor="inputCity">Ciudad</label>
						<input
							type="text"
							className="form-control"
							id="inputCity"
							value={city}
							onChange={event => setCity(event.target.value)}
						/>
					</div>
					<div className="form-field">
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
					<div className="form-field">
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
					<div className="form-field">
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
					<div className="form-field">
						<label htmlFor="inputPhone">Número de contacto</label>
						<input
							type="text"
							className="form-control"
							id="inputPhone"
							value={phoneNumber}
							onChange={event => setPhoneNumber(event.target.value)}
						/>
					</div>
					<div className="form-field">
						<label htmlFor="inputWebsite">Página web</label>
						<input
							type="text"
							className="form-control"
							id="inputWebsite"
							value={website}
							onChange={event => setWebsite(event.target.value)}
						/>
					</div>
					<br />
					<div className="form-field">
						<button type="button" className="button-green-register" onClick={handleSubmit}>
							{params.id ? "Update" : "Create"}
						</button>
					</div>
				</form>
			</div>
		</>
	);
};
