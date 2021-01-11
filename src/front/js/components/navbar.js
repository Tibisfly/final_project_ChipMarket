import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ModalUpload } from "./modalUpload";

export const Navbar = () => {
	const [modal, setModal] = useState(false);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">CHIPMARKET</span>
			</Link>
			<div className="ml-auto">
				<ModalUpload show={modal} onClose={() => setModal(false)} />
			</div>
			<button type="button" className="btn btn-link" onClick={() => setModal(true)}>
				<i className="fas fa-plus" />
			</button>
		</nav>
	);
};
