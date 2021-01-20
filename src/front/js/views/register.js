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
							<input
								type="text"
								className="form-control w-100"
								id="inputFirstName"
								placeholder="First name"
								value={firstName}
								onChange={event => setFirstName(event.target.value)}
							/>
							<label htmlFor="inputFirstName">Nombre</label>
						</div>
						<div className="form-field">
							<input
								type="text"
								className="form-control"
								id="inputLastName"
								placeholder="Last name"
								value={lastName}
								onChange={event => setLastName(event.target.value)}
							/>
							<label htmlFor="inputLastName">Apellidos</label>
						</div>
						<div className="form-field">
							<input
								type="email"
								className="form-control"
								id="inputEmail"
								placeholder="Email"
								value={email}
								onChange={event => setEmail(event.target.value)}
							/>
							<label htmlFor="inputEmail">Correo electrónico</label>
						</div>
						<div className="form-field">
							<input
								type="password"
								className="form-control"
								id="inputPassword"
								placeholder="Password"
								value={password}
								onChange={event => setPassword(event.target.value)}
							/>
							<label htmlFor="inputPassword">Contraseña</label>
						</div>
						<div className="form-field">
							<input
								type="text"
								className="form-control"
								id="inputUsername"
								placeholder="Username"
								value={username}
								onChange={event => setUsername(event.target.value)}
							/>
							<label htmlFor="inputUsername">Nombre de usuario</label>
						</div>
						<div className="form-field">
							<button type="button" className="btn btn-success btn-block" onClick={handleSubmit}>
								{store.token ? "Update" : "Create"}
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>

		// 	<Link to="/commerces" type="button" className="btn btn-outline-dark">
		// 		¿Eres un comercio?. Pincha aquí
		// 	</Link>
		// </div>
	);
};
