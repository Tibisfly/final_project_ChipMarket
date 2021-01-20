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
						<Link to="create/post" type="button" className="btn btn-link-light">
							<i className="fas fa-plus">Añade una publicación</i>
						</Link>
						{/* <ModalUpload show={modal} onClose={() => setModal(false)} /> */}
					</div>
				</div>
			</div>
		</>
	);
};
