import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="mt-auto">
		<div className="d-flex justify-content-center">
			<Link id="send" to="/contact-us" className="nav-link active text-decoration-none " aria-current="page">
				Envíanos un email
			</Link>

			<Link id="about" to="/about-us" className="nav-link active text-decoration-none" aria-current="page">
				Sobre nosotros
			</Link>
		</div>
	</footer>
);
