import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const Register = function(props) {
	// const [firstName, setFirstName] = useState("");
	// const [lastName, setLastName] = useState("");
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const [username, setUsername] = useState("");
	// const [avatar, setAvatar] = useState("");

	const [firstName, setFirstName] = useState("Enrique");
	const [lastName, setLastName] = useState("Rodriguez");
	const [email, setEmail] = useState("rodrike90@mgail.com");
	const [password, setPassword] = useState("1234");
	const [username, setUsername] = useState("rodrike90");
	const [avatar, setAvatar] = useState("");

	const params = useParams();

	const { store, actions } = useContext(Context);

	function handleSubmit() {
		const data = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password,
			username: username,
			avatar: avatar
		};
		// cuando tenga en flux la funcion de ACTUALIZAR (PUT) hago aqui un if params.id
		actions.createUser(data);
	}
	return (
		<div className="container-fluid">
			<h1>{params.id ? "Actualizar usuario" : "Crear usuario"} </h1>
			<form>
				<div className="form-group">
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
				<div className="form-group">
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
				<div className="form-group">
					<label htmlFor="inputEmail">Correo electrónico</label>
					<input
						type="email"
						className="form-control"
						id="inputEmail"
						placeholder="Email"
						value={email}
						onChange={event => setEmail(event.target.value)}
					/>
				</div>
				<div className="form-group">
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
				<div className="form-group">
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
				<br />
				<Link to="/feed" type="button" className="btn btn-success btn-block" onClick={handleSubmit}>
					{params.id ? "Update" : "Create"}
				</Link>
			</form>
			<br />
			<Link to="/commerces" type="button" className="btn btn-outline-dark">
				¿Eres un comercio?. Pincha aquí
			</Link>
		</div>
	);
};
