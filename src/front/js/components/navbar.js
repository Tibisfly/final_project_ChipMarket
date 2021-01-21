import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ModalUpload } from "./modal-upload";
import { Context } from "../store/appContext";
import chipMarket from "../../img/chipmarket.png";

export const Navbar = props => {
	const [modal, setModal] = useState(false);
	const { store, actions } = useContext(Context);

	let handleLoggin = "";
	if (store.token === null) {
		handleLoggin = (
			<div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item font-weight-bold mr-3">
						<Link type="button" to="/login" style={{ textDecoration: "none", color: "green" }}>
							Iniciar Sesión
						</Link>
					</li>
					<li className="nav-item font-weight-bold ml-3">
						<Link type="button" to="/register" style={{ textDecoration: "none", color: "green" }}>
							Registrarse
						</Link>
					</li>
				</ul>
			</div>
		);
	} else {
		handleLoggin = (
			<>
				<div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row-reverse">
						<li className="nav-item font-weight-bold">
							<Link
								to="/commerces"
								className="nav-link active mr-3"
								style={{ textDecoration: "none", color: "black" }}>
								¿Eres un comercio?. Únete a nuestra comunidad.
							</Link>
						</li>
						<li className="nav-item font-weight-bold">
							<Link
								to="/feed"
								className="nav-link active mr-3"
								style={{ textDecoration: "none", color: "black" }}>
								Perfil
							</Link>
						</li>
						<li className="nav-item font-weight-bold mt-2">
							<Link
								className="align-self-center"
								to="/"
								type="button"
								style={{ textDecoration: "none", color: "green" }}
								onClick={() => actions.logOut()}>
								Log Out
							</Link>
						</li>
					</ul>
				</div>
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
			<nav
				className="navbar navbar-expand-lg navbar-light bg-light"
				style={{ textDecoration: "none", color: "white" }}>
				<div className="container-fluid">
					<Link to="/" className="chip-market-navbar d-flex align-self-start">
						<img
							className="logo-login m-4"
							width="150"
							// src="https://i.pinimg.com/236x/91/c8/4f/91c84f43dfafccb35658e04d56970834.jpg"
							src={chipMarket}
						/>
					</Link>

					<div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
