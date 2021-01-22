import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<div className="container-fluid">
		<footer className="" style={{ borderTop: "1px solid green", padding: "40px" }}>
			<div className="d-flex justify-content-center">
				<Link
					to="/contact-us"
					className="nav-link active font-weight-bold"
					aria-current="page"
					href="/about-us"
					style={{ textDecoration: "none", color: "green" }}>
					Envíanos un email
				</Link>

				<Link
					to="/about-us"
					className="nav-link active font-weight-bold"
					aria-current="page"
					href="/about-us"
					style={{ textDecoration: "none", color: "green" }}>
					Sobre nosotros
				</Link>
			</div>
		</footer>
	</div>
);
