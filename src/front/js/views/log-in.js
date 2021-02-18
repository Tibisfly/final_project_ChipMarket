import React, { useContext, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import { ModalPassword } from "../components/modal-password.js";
import "../../styles/forms.scss";
import LogoBlue from "../../img/logo-blue.png";

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
				<div className="col-lg-6 col-12 login-izq" />

				<div className="col-lg-6 col-12 login-center">
					<div className="the-login-container">
						<div className="row">
							<div className="col-lg-8">
								<h1>Bienvenido ChipAddict</h1>
								<h2>Por favor inicia sesión</h2>
							</div>
							<div className="col-lg-4 ">
								<img className="logo-container-login" src={LogoBlue} />
							</div>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleFormControlInput1" className="form-label">
								Correo electrónico
							</label>
							<input
								type="email"
								className="form-control"
								id="exampleFormControlInput1"
								placeholder="tucorreo@ejemplo.com"
								value={email}
								onChange={event => setEmail(event.target.value)}
							/>
						</div>
						<div className="mt-3">
							<label htmlFor="formControlInput1" className="form-label">
								Contraseña
							</label>
							<input
								type="password"
								className="form-control"
								id="formControlInput1"
								placeholder="Introduce tu contraseña"
								value={password}
								onChange={event => setPassword(event.target.value)}
							/>
						</div>
						<div>
							<button type="button" className="btn btn-link text-muted " onClick={() => setModal(true)}>
								¿Olvidó su contraseña?. Pinche aquí.
							</button>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" id="gridCheck" />
							<label className="form-check-label" htmlFor="gridCheck">
								Recuérdame
							</label>
						</div>
						<div className="register-login">
							<Link to="/register" type="button" className="text-decoration">
								¿Todavía no tienes cuenta? Pincha aquí y únete.
							</Link>
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
						</div>
					</div>
				</div>
			</div>

			<ModalPassword show={modal} onClose={() => setModal(false)} />
		</div>
	);
};
