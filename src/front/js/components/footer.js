import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<div className="container-fluid">
		<footer className="border-top border-success p-5">
			<div className="d-flex justify-content-center">
				<Link
					to="/contact-us"
					className="nav-link active font-weight-bold text-decoration-none text-success"
					aria-current="page">
					Envíanos un email
				</Link>

				<Link
					to="/about-us"
					className="nav-link active font-weight-bold text-decoration-none text-success"
					aria-current="page">
					Sobre nosotros
				</Link>
			</div>
		</footer>
	</div>
);
