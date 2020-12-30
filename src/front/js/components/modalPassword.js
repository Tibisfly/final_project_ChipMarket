import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import { Modal } from "bootstrap";

export const ModalPassword = function(props) {
	const [email, setEmail] = useState("");

	return (
		<div className="modal" tabIndex="-1" role="dialog">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">¿Olvidó su contraseña?</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<p>Por favor, introduzca su correo electrónico para recuperar la contraseña</p>
					</div>
					<div className="modal-footer">
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
						<button type="button" className="btn btn-secondary" data-dismiss="modal">
							Enviar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ModalPassword.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	data: PropTypes.object
};
