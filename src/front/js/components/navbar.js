import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ModalUpload } from "./modal-upload";
import { Context } from "../store/appContext";
import chipMarket from "../../img/chipmarket.png";
import "../../styles/home.scss";

export const Navbar = props => {
	const [modal, setModal] = useState(false);
	const { store, actions } = useContext(Context);

	let handleLoggin = "";
	if (store.token === null) {
		handleLoggin = (
			<>
				<li className="nav-item font-weight-bold mr-3 text-decoration-none text-success">
					<Link type="button" to="/login">
						Iniciar Sesión
					</Link>
				</li>
				<li className="nav-item font-weight-bold ml-3 text-decoration-none text-success">
					<Link type="button" to="/register">
						Registrarse
					</Link>
				</li>
			</>
		);
	} else {
		handleLoggin = (
			<>
				<li className="nav-item font-weight-bold">
					<Link to="/commerces" className="nav-link active mr-3 text-decoration-none text-dark">
						¿Eres un comercio?. Únete a nuestra comunidad.
					</Link>
				</li>
				<li className="nav-item font-weight-bold">
					<Link to="/feed" className="nav-link active mr-3 text-decoration-none text-dark">
						Mi Perfil
					</Link>
				</li>
				<li className="nav-item font-weight-bold mt-2">
					<Link
						className="align-self-center text-decoration-none text-success"
						to="/"
						type="button"
						onClick={() => actions.logOut()}>
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
			<nav className="navbar navbar-expand-lg text-decoration-none">
				<div className="container-fluid">
					<Link to="/" className="chip-market-navbar d-flex align-self-start">
						<img className="logo-login m-4" width="15%" src={chipMarket} />
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
