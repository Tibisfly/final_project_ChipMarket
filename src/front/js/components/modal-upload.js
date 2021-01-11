import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import { UpButton } from "./up-button";

//Cuando el usuario no tiene comercio no podrá añadir un post. Hacer un UseEffect con params.id para crear comercio si aun no ha hecho el "upgrade".

// seguro que nos hacen reutilizar el form de Register, pero la verdad es que no se como hacerlo

export const ModalUpload = function(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h4 className="modal-title">Crear Post</h4>
						<button
							onClick={() => props.onClose()}
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div>
						<input method="post" name="text-post" size="50" width="100%" />
					</div>

					<div className="uploadbutton">
						<input accept="image/*" className="input" id="contained-button-file" multiple type="file" />

						{/* <label htmlFor="contained-button-file"> */}
						{/* <button variant="contained" color="primary" component="span">
				        Upload
			            </button> */}
						{/* </label> */}
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

ModalUpload.propTypes = {
	onClose: PropTypes.func,
	show: PropTypes.bool
};

ModalUpload.defaultProps = {
	show: false,
	onClose: null
};
