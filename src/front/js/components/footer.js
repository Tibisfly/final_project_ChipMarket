import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center bg-light">
		<ul className="navbar-nav me-auto mb-2 mb-lg-0">
			<li className="nav-item">
				<li className="nav-item">
					<Link
						to="/contact-us"
						className="nav-link active font-weight-bold"
						aria-current="page"
						href="/about-us"
						style={{ textDecoration: "none", color: "green" }}>
						Envíanos un email
					</Link>
				</li>
				<li className="nav-item">
					<Link
						to="/about-us"
						className="nav-link active font-weight-bold"
						aria-current="page"
						href="/about-us"
						style={{ textDecoration: "none", color: "green" }}>
						Sobre nosotros
					</Link>
				</li>
			</li>
		</ul>
	</footer>
);
