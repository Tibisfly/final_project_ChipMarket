import React, { useState } from "react";
import { ModalUpload } from "./modal-upload";
import { Link } from "react-router-dom";

export const UploadPost = function(props) {
	const [modal, setModal] = useState(false);

	return (
		<>
			<p className="font-weight-bold text-success">Sube una foto</p>
			<Link to="/create/post" type="button" className="btn btn-link-light d-flex">
				Añade una publicación
			</Link>
		</>
	);
};
