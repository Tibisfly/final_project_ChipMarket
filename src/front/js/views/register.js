import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import "../../styles/forms.scss";

export const Register = function(props) {
	const { store, actions } = useContext(Context);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [avatar, setAvatar] = useState("");

	const history = useHistory();

	const params = useParams();

	function handleSubmit() {
		const data = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password,
			username: username,
			avatar: avatar
		};

		if (store.token) {
			actions.updateUser(data, () => {
				history.push("/profiles");
			});
		} else {
			actions.createUser(data, () => {
				history.push("/feed");
			});
		}
	}

	return (
		<>
			<div className="container-fluid register-log-in">
				<div className="welcoming-register">
					{store.token
						? "ChipAddict, Por favor, actualiza tus datos"
						: "Estás a un paso más cerca de obtener las mejores ofertas cerca de ti. Por favor, rellena tus datos y únete a la ChipFamily"}
				</div>
			</div>
			<div className="container">
				<section className="create-user">
					<h1 className="title">Regístrate como ChipAddict</h1>
					<div className="container">
						<div className="contact-form-row align-items-center">
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
							<br />
							<div className="form-field">
								<button type="button" className="button-green-register" onClick={handleSubmit}>
									{store.token ? "Actualizar" : "Registrarse"}
								</button>
							</div>
						</div>
					</div>
				</section>
				<div className="">
					<Link to="/commerces">Si tienes un negocio, dale de alta pinchando aquí</Link>
				</div>
			</div>
		</>
	);
};
