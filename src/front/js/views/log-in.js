import React, { useContext, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import { ModalPassword } from "../components/modal-password.js";
import "../../styles/forms.scss";
import chipMarket from "../../img/chipmarket.png";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";

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
			<div className="container-fluid login-wrapper">
				{/* <div className="jumbotron">
					<h1 className="login-hero-text">Ahorra tiempo</h1>
				</div> */}
				<div className="row g-0 h-auto">
					<div className="login-img col-lg-6 col-md-12 col-sm-12 my-auto order-2 order-lg-1">
						<div className="">
							<h1>Prueba</h1>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column align-items-end my-auto order-1 order-lg-2 ">
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
								<div
									className="error fw-bold"
									style={{
										display: store.error != null ? "block" : "none"
									}}>
									<p className="error-login fw-bold">Usuario y contraseña incorrectos</p>
									{console.log(store.error)}
								</div>
							</form>
							<div className="register-login btn btn-link d-flex flex-row-reverse text-end w-100 text-decoration-none">
								<Link to="/register">¿Todavía no tienes cuenta? Pincha aquí y únete.</Link>
							</div>
						</div>

						<ModalPassword show={modal} onClose={() => setModal(false)} />
					</div>
				</div>
			</div>
		</>
	);
};
