import React, { useContext, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import "../../styles/modal.scss";

export const ModalPassword = function(props) {
	const [state, setState] = useState({});
	const { store, actions } = useContext(Context);

	return (
		<div
			className="modal-password align-self-start"
			tabIndex="-1"
			role="dialog"
			style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">
							Por favor, introduzca su correo electrónico para reestablecer su contraseña.
						</h5>
						<Link
							to="/login"
							onClick={() => props.onClose()}
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</Link>
					</div>
					<div className="modal-body">
						<input
							type="email"
							className="form-control"
							placeholder="Correo electrónico"
							aria-label="Email"
							aria-describedby="basic-addon1"
						/>
						<br />
						<p className="text-center font-italic">Le enviaremos un correo electrónico, siga los pasos.</p>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-primary"
							data-dismiss="modal"
							aria-label="Close"
							onClick={() => props.onClose()}>
							Enviar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ModalPassword.propTypes = {
	onClose: PropTypes.func,
	show: PropTypes.bool
};

ModalPassword.defaultProps = {
	show: false,
	onClose: null
};
