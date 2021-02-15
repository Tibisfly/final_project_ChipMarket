import React, { useContext, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import { ModalPassword } from "../components/modal-password.js";
import "../../styles/forms.scss";

export const LogIn = function(props) {
	const { store, actions } = useContext(Context);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [modal, setModal] = useState(false);

	const history = useHistory();

	function handleSubmit() {
		const data = {
			email: email,
			password: password
		};
		actions.logIn(data, () => {
			if (store.error == null) {
				history.push("/feed");
			}
		});
	}

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-4 col-12 login-izq" />

				<div className="col-lg-8 col-12 login-center">
					<h1>Bienvenido ChipAddict</h1>

					<h2>No olvides seguir a tus comercios preferidos y aprovechar las ofertas.</h2>
					<div className="container-fluid">
						<form className="login-forms">
							<div className="form-group">
								<label htmlFor="staticEmail" className="form-label font-weight-bold">
									Correo electrónico
								</label>

								<input
									type="email"
									className="form-control form-width"
									id="staticEmail"
									value={email}
									onChange={event => setEmail(event.target.value)}
									placeholder="Ingresa tu correo electrónico"
								/>
							</div>
							<div className="form-group ">
								<label htmlFor="inputPassword" className="form-label font-weight-bold">
									Contraseña
								</label>
								<input
									type="password"
									className="form-control form-width"
									id="inputPassword"
									value={password}
									onChange={event => setPassword(event.target.value)}
									placeholder="Ingresa tu contraseña"
								/>
							</div>
							<button type="button" className="btn btn-link text-muted " onClick={() => setModal(true)}>
								¿Olvidó su contraseña?. Pinche aquí.
							</button>
							<div className="form-group">
								<div className="form-check">
									<input type="checkbox" className="form-check-input" id="dropdownCheck" />
									<label className="form-check-label" htmlFor="dropdownCheck">
										Recuérdame
									</label>
								</div>
							</div>
							<button type="button" className="button-green-login" onClick={() => handleSubmit()}>
								Iniciar Sesión
							</button>
							<div
								className="error fw-bold"
								style={{
									display: store.error != null ? "block" : "none"
								}}>
								<p className="error-login fw-bold">Usuario y contraseña incorrectos</p>
								{console.log(store.error)}
							</div>
						</form>
					</div>
					<div className="register-login">
						<Link to="/register" type="button" className="text-decoration">
							¿Todavía no tienes cuenta? Pincha aquí y únete.
						</Link>
					</div>
				</div>

				<ModalPassword show={modal} onClose={() => setModal(false)} />
			</div>
		</div>
	);
};
