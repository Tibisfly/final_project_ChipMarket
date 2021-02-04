import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ModalUpload } from "./modal-upload";
import { Context } from "../store/appContext";

import chipMarket from "../../img/chipmarket.png";
import "../../styles/home.scss";

export const Navbar = props => {
	const { store, actions } = useContext(Context);

	let handleLoggin = "";
	if (store.token === null) {
		handleLoggin = (
			<>
				<li className="nav-item active">
					<Link className="nav-link" type="button" to="/login">
						Iniciar Sesión
					</Link>
				</li>
				<li className="nav-item ">
					<Link className="nav-link" type="button" to="/register">
						Registrarse
					</Link>
				</li>
			</>
		);
	} else {
		handleLoggin = (
			<>
				<li className="nav-item">
					<Link to="/commerces" className="nav-link">
						¿Eres un comercio?. Únete a nuestra comunidad.
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/feed" className="nav-links">
						Mi Perfil
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/" type="button" onClick={() => actions.logOut()}>
						Log Out
					</Link>
				</li>
			</>
		);
	}

	// function smoothScroll(target) {
	// 	var scrollContainer = target;
	// 	do {
	// 		//find scroll container
	// 		scrollContainer = scrollContainer.parentNode;
	// 		if (!scrollContainer) return;
	// 		scrollContainer.scrollTop += 1;
	// 	} while (scrollContainer.scrollTop == 0);

	// 	var targetY = 0;
	// 	do {
	// 		//find the top of target relatively to the container
	// 		if (target == scrollContainer) break;
	// 		targetY += target.offsetTop;
	// 	} while ((target = target.offsetParent));

	// 	scroll = function(c, a, b, i) {
	// 		i++;
	// 		if (i > 30) return;
	// 		c.scrollTop = a + ((b - a) / 30) * i;
	// 		setTimeout(function() {
	// 			scroll(c, a, b, i);
	// 		}, 20);
	// 	};
	// 	// start scrolling
	// 	scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
	// }
	return (
		<>
			<nav className="navbar navbar-expand-lg">
				<div className="navbar-brand">
					<Link to="/" className="navbar-logo">
						<img className="logo-login m-4" width="15%" src={chipMarket} />
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
						<ul className="navbar-nav style-ul-navbar">
							{/* <li className="nav-item">
								<a
									className="nav-link font-weight-bold pointer"
									onClick={() => smoothScroll(document.getElementById("ahorraTiempo"))}>
									¡Ahorra tiempo y dinero mientras apoyas al autónomo!
								</a>
							</li> */}
							{handleLoggin}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
