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
			<form>
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
			</form>
			<button type="button" className="btn btn-dark btn-lg btn-block">
				Entrar
			</button>
			<br />

			<button type="button" className="btn btn-link" onClick={() => setState({ showModal: true })}>
				¿Olvidó su contraseña?. Pinche aquí.
			</button>
			<ModalPassword show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};