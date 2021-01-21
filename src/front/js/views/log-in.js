import React, { useContext, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import { ModalPassword } from "../components/modal-password.js";
import "../../styles/forms.scss";
import chipMarket from "../../img/chipmarket.png";

export const LogIn = function(props) {
	const { store, actions } = useContext(Context);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [modal, setModal] = useState(false);

	const history = useHistory();

	function handleSubmit() {
		const data = {
			email: email,
			password: password
		};
		actions.logIn(data, () => {
			if (store.error == null) {
				history.push("/feed");
			}
		});
	}

	return (
		<>
			<section>
				<div className="row g-0">
					<div className="col-lg-7">
						<>
							<div
								id="carouselExampleDark"
								className="carousel carousel-dark slide"
								data-bs-ride="carousel">
								<ol className="carousel-indicators">
									<li
										data-bs-target="#carouselExampleDark"
										data-bs-slide-to="0"
										className="active"></li>
									<li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
								</ol>
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img
											src="https://images.unsplash.com/photo-1555421689-491a97ff2040?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fGVjb21tZXJjZSUyMDEwNTB4OTYwJTIwcHh8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
											className="d-block w-100"
											alt="..."
										/>
										<div className="carousel-caption d-none d-md-block">
											<h5>Donde esta este texto??</h5>
											<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
										</div>
									</div>
									<div className="carousel-item">
										<img
											src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDV8fHNob3BwaW5nJTIwLmpwZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
											className="d-block w-100 "
											alt="..."
										/>
										<div className="carousel-caption d-none d-md-block">
											<h5>Second slide label</h5>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										</div>
									</div>
								</div>
								<a
									className="carousel-control-prev"
									href="#carouselExampleDark"
									role="button"
									data-bs-slide="prev">
									<span className="carousel-control-prev-icon" aria-hidden="true"></span>
									<span className="visually-hidden">Previous</span>
								</a>
								<a
									className="carousel-control-next"
									href="#carouselExampleDark"
									role="button"
									data-bs-slide="next">
									<span className="carousel-control-next-icon" aria-hidden="true"></span>
									<span className="visually-hidden">Next</span>
								</a>
							</div>
						</>
					</div>

					<div className="col-lg-5 d-flex flex-column align-items-end min-vh-100">
						<hr />

						<div className="title-login px-lg-5 py-lg-4 p-4 mt-4 w-100">
							<h1 className="mb-4 font-weight-bold">Bienvenido ChipAddict</h1>

							<form>
								<div className="mb-4 form-group row">
									<label htmlFor="staticEmail" className="form-label font-weight-bold">
										Correo electrónico
									</label>

									<input
										type="email"
										className="form-control border- w-100"
										id="staticEmail"
										value={email}
										onChange={event => setEmail(event.target.value)}
										placeholder="Ingresa tu correo electrónico"
									/>
								</div>
								<div className="form-group row mb-4">
									<label htmlFor="inputPassword" className="form-label font-weight-bold w-100">
										Contraseña
									</label>
									<input
										type="password"
										className="form-control border-1 mb-2"
										id="inputPassword"
										value={password}
										onChange={event => setPassword(event.target.value)}
										placeholder="Ingresa tu contraseña"
									/>
								</div>
								<button
									type="button"
									className="btn btn-link text-muted my-2"
									onClick={() => setModal(true)}>
									¿Olvidó su contraseña?. Pinche aquí.
								</button>
								<div className="form-group">
									<div className="form-check">
										<input type="checkbox" className="form-check-input" id="dropdownCheck" />
										<label className="form-check-label" htmlFor="dropdownCheck">
											Recuérdame
										</label>
									</div>
								</div>
								<button
									type="button"
									className="btn btn-success w-100 mb-4"
									onClick={() => handleSubmit()}>
									Iniciar Sesión
								</button>
								<div className="error" style={{ display: store.error != null ? "block" : "none" }}>
									<p>Usuario y contraseña incorrectos</p>
								</div>
							</form>
							<div className="btn btn-link d-flex flex-row-reverse text-end w-100">
								<Link to="/users" style={{ textDecoration: "none", color: "green" }}>
									¿Todavía no tienes cuenta? Pincha aquí y únete.
								</Link>
							</div>
						</div>

						<ModalPassword show={modal} onClose={() => setModal(false)} />
					</div>
				</div>
			</section>
		</>
	);
};
