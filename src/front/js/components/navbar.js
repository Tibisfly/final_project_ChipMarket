import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ModalUpload } from "./modal-upload";

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
			<form className="d-flex">
				<input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
				<button className="btn btn-outline-primary" type="submit">
					Search
				</button>
			</form>
			<button type="button" className="btn btn-link" onClick={() => setModal(true)}>
				<i className="fas fa-plus" />
			</button>
		</nav>
	);
};
