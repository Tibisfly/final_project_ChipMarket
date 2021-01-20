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
					<span style={{ color: "green" }}>-</span>
					<li className="nav-item font-weight-bold ml-3">
						<Link type="button" to="/users" style={{ textDecoration: "none", color: "green" }}>
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
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
						<li className="nav-item font-weight-bold">
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
							<li className="nav-item">
								<a
									className="nav-link font-weight-bold"
									href="me gustaria que bajara en scroll a un sitio del home y luego en ese sitio haya un boton de login">
									¡Ahorra tiempo y dinero mientras apoyas al autónomo!
								</a>
							</li>

							{handleLoggin}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
