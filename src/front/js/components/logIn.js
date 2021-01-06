import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import { ModalPassword } from "./modalPassword.js";

export const LogIn = function(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [state, setState] = useState({
		showModal: false
	});

	return (
		<div className="container">
			<h1 className="display-3 text-center">Entra a ChipMarket</h1>
			<br />
			<div>
				<form className="px-4 py-3">
					<div className="form-group row">
						<label htmlFor="staticEmail" className="col-sm-2 col-form-label">
							Correo electrónico
						</label>
						<div className="col-sm-10">
							<input
								type="text"
								className="form-control-plaintext"
								id="staticEmail"
								value={email}
								onChange={event => setEmail(event.target.value)}
								placeholder="Introduce tu correo electrónico"
							/>
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="inputPassword" className="col-sm-2 col-form-label">
							Contraseña
						</label>
						<div className="col-sm-10">
							<input
								type="password"
								className="form-control-plaintext"
								id="inputPassword"
								value={password}
								onChange={event => setPassword(event.target.value)}
								placeholder="Introduce tu contraseña"
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="form-check">
							<input type="checkbox" className="form-check-input" id="dropdownCheck" />
							<label className="form-check-label" htmlFor="dropdownCheck">
								Recuérdame
							</label>
						</div>
					</div>
					<button type="submit" className="btn btn-dark">
						Entrar
					</button>
				</form>
				<br />
				<Link to="/users">Nuevo por aquí? Regístrate</Link>

				<button type="button" className="btn btn-link" onClick={() => setState({ showModal: true })}>
					¿Olvidó su contraseña? Pinche aquí.
				</button>

				<ModalPassword show={state.showModal} onClose={() => setState({ showModal: false })} />
			</div>
		</div>
	);
};
