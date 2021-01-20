import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com">4Geeks Academy - About Us, Contacto, Membresia</a>
		</p>
		<ul className="navbar-nav me-auto mb-2 mb-lg-0">
			<li className="nav-item">
				<Link to="/about-us" className="nav-link active font-weight-bold" aria-current="page" href="/about-us">
					About Us
				</Link>
			</li>
			<li className="nav-item">
				<a className="nav-link font-weight-bold" href="">
					Contact us!
				</a>
			</li>
			<li className="nav-item font-weight-bold">
				<a className="nav-link active" href="#">
					Ya veremos que va aqui.
				</a>
			</li>
		</ul>
	</footer>
);
