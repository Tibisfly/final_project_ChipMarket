import React, { useState } from "react";
import { ModalUpload } from "./modal-upload";

export const UploadPost = function(props) {
	const [modal, setModal] = useState(false);

	return (
		<>
			<div className="card mt-5">
				<div className="card-body">
					<div>
						<p className="font-weight-bold text-muted">Sube una foto</p>
						<button type="button" className="btn btn-link-light" onClick={() => setModal(true)}>
							<i className="fas fa-plus">Añade una publicación</i>
						</button>
						<ModalUpload show={modal} onClose={() => setModal(false)} />
					</div>
				</div>
			</div>
		</>
	);
};
