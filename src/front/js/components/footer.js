import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<div className="container-fluid">
		<footer className="footer row mx-2 ">
			<div className="col-6">
				<Link
					to="/contact-us"
					className="nav-link active font-weight-bold"
					aria-current="page"
					href="/about-us"
					style={{ textDecoration: "none", color: "green" }}>
					Envíanos un email
				</Link>
			</div>
			<div className="col-6">
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
