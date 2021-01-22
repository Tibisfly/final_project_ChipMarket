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
		<div className="container">
			<section className="create-user">
				<h1 className="title">Regístrate como ChipAddict</h1>
				<div className="container">
					<div className="contact-form-row align-items-center">
						<div className="form-field ">
							<label htmlFor="inputFirstName">Nombre</label>
							<input
								type="text"
								className="form-control w-100 mb-3"
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
								className="form-control mb-3"
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
								className="form-control mb-3"
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
								className="form-control mb-3"
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
								className="form-control mb-3"
								id="inputUsername"
								placeholder="Username"
								value={username}
								onChange={event => setUsername(event.target.value)}
							/>
						</div>
						<br />
						<div className="form-field">
							<button type="button" className="btn btn-success btn-block" onClick={handleSubmit}>
								{store.token ? "Update" : "Create"}
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
