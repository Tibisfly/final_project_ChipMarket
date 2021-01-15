import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ModalUpload } from "./modal-upload";

export const Navbar = () => {
	const [modal, setModal] = useState(false);

	return (
		<>
			<nav
				className="navbar navbar-expand-lg navbar-light bg-light"
				style={{ textDecoration: "none", color: "white" }}>
				<div className="container-fluid">
					<Link to="/" className="chip-market-navbar d-flex align-self-start">
						<img
							className="logo-login m-4"
							width="70"
							src="https://i.pinimg.com/236x/91/c8/4f/91c84f43dfafccb35658e04d56970834.jpg"
						/>
					</Link>

					<div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active font-weight-bold" aria-current="page" href="/about-us">
									About ChipMarket
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link font-weight-bold"
									href="me gustaria que bajara en scroll a un sitio del home y luego en ese sitio haya un boton de login">
									¡Ahorra tiempo y dinero mientras apoyas al autónomo!
								</a>
							</li>
							<li className="nav-item font-weight-bold">
								<a className="nav-link active" href="#">
									¿Eres un comercio?. Únete a nuestra comunidad.
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			{/* Esto creo que deberíamos colocarlo en el perfil de usuarios y en el de comercios respectivamente */}
			{/* <div className="ml-auto">
					<ModalUpload show={modal} onClose={() => setModal(false)} />
				</div>
				<form className="d-flex">
					<input className="form-control mx-4" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-success" type="submit">
						Search
					</button>
				</form>
				<button type="button" className="btn btn-link-light" onClick={() => setModal(true)}>
					<i className="fas fa-plus">Añade una publicación</i>
				</button> */}
		</>
	);
};
