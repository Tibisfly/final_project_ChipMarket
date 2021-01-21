import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

import "../../styles/forms.scss";

export const ContactUs = function() {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const [modal, setModal] = useState(false);
	const params = useParams();

	function handleSubmit() {
		history.push("/");
	}

	return (
		<div className="container">
			<section className="create-user">
				<h1 className="title">Háblanos sobre ti.</h1>
				<div className="container">
					<div className="contact-form-row align-items-center">
						<div className="form-field ">
							<input
								type="text"
								className="form-control w-100"
								id="inputFirstName"
								placeholder="First name"
							/>
							<label htmlFor="inputFirstName">Nombre</label>
						</div>
						<div className="form-field">
							<input type="text" className="form-control" id="inputLastName" placeholder="Last name" />
							<label htmlFor="inputLastName">Apellidos</label>
						</div>
						<div className="form-field">
							<input type="email" className="form-control" id="inputEmail" placeholder="Email" />
							<label htmlFor="inputEmail">Correo electrónico</label>
						</div>
						<div className="form-field">
							<textarea
								className="form-control"
								id="inputDescription"
								placeholder="Escribe tu mensaje aqui."
							/>
							{/* <label htmlFor="inputDescription">Descripción de tu post</label> */}
						</div>
						<div className="form-field">
							<button type="button" className="btn btn-success btn-block" onClick={handleSubmit}>
								Enviar
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
