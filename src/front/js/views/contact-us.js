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
			<section className="contact-user">
				<h1 className="title">Háblanos sobre ti.</h1>
				<div className="container">
					<div className="contact-form-row align-items-center">
						<div className="form-field ">
							<label htmlFor="inputFirstName">Nombre</label>
							<input type="text" className="form-control w-100" id="inputFirstName" />
						</div>
						<div className="form-field">
							<label htmlFor="inputLastName">Apellidos</label>
							<input type="text" className="form-control" id="inputLastName" />
						</div>
						<div className="form-field">
							<label htmlFor="inputEmail">Email</label>
							<input type="email" className="form-control" id="inputEmail" />
						</div>
						<div className="form-field">
							<label htmlFor="inputEmail">Mensaje</label>
							<textarea
								className="form-control"
								id="inputDescription"
								placeholder="Escribe tu mensaje aquí."
							/>
							{/* <label htmlFor="inputDescription">Descripción de tu post</label> */}
						</div>
						<div className="form-field">
							<button type="button" className="button-green-register" onClick={handleSubmit}>
								Enviar
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
