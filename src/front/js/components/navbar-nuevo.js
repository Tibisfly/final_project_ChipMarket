import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ModalUpload } from "./modal-upload";
import { Context } from "../store/appContext";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import ChipMarketNew from "../../img/ChipMarketNew.png";
import "../../styles/navbar.scss";

export const NavbarNuevo = props => {
	const [scrollClass, setScrollClass] = useState({
		className: "light-color navbar navbar-expand-lg fixed-top"
	});

	const handleScroll = () => {
		var homeIzq = document.getElementById("home-izq");
		if (homeIzq) {
			if (window.pageYOffset > homeIzq.clientHeight) {
				setScrollClass({
					className: "light-color navbar navbar-expand-lg fixed-top"
				});
			} else {
				setScrollClass({
					className: "no-color navbar navbar-expand-lg fixed-top"
				});
			}
		}
	};

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className="header">
			<nav className={scrollClass.className}>
				<div className="container-fluid navbar-light">
					<Link to="/" className="navbar-brand">
						ChipMarket
					</Link>
					<button
						className="navbar-toggler "
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarScroll"
						aria-controls="navbarScroll"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse navbarScrollCcs" id="navbarScroll">
						<form className="d-flex form-search-navbar">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Introduce tu código postal"
								aria-label="Search"></input>
							<button className="btn search-button" type="submit">
								Search
							</button>
						</form>
						<ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarScrollingDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									¿Eres un usuario?
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
									<li>
										<a className="dropdown-item" href="#">
											Inicia sesión
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Crea una cuenta
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarScrollingDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									¿Eres un comercio?
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
									<li>
										<a className="dropdown-item" href="#">
											Inicia sesión
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Date de alta
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{/* <div className="container-fluid">
					<Link to="/" className="navbar-brand">
						ChipMarket
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<form className="d-flex">
						<input
							className="form-control search-navbar"
							type="search"
							placeholder="Introduce tu código postal"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
					<div className="" id="navbarSupportedContent">
						<ul className="navbar-nav m-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Link
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									Dropdown
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
									Disabled
								</a>
							</li>
						</ul>
					</div>
				</div> */}
			{/* </Navbar> */}
			{/* <nav className="navbar navbar-expand-lg navbar-light bg-light" fixed="top">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav m-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Link
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false">
									Dropdown
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
									Disabled
								</a>
							</li>
						</ul>
						<form className="d-flex">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-outline-success" type="submit">
								Search
							</button>
						</form>
					</div>
				</div>
			</nav> */}
		</header>
	);
};
