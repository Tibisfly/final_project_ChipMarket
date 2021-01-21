import React, { useState } from "react";
import { ModalUpload } from "./modal-upload";
import { Link } from "react-router-dom";

export const UploadPost = function(props) {
	const [modal, setModal] = useState(false);

	return (
		<>
			<div className="card mt-5">
				<div className="card-body">
					<div>
						<p className="font-weight-bold text-muted">Sube una foto</p>
						<Link to="/create/post" type="button" className="btn btn-link-light d-flex">
							<i className="fas fa-plus align-self-center mr-3" />
							<span>Añade una publicación</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
