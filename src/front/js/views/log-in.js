import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import { ModalPassword } from "../components/modal-password.js";
import "../../styles/forms.scss";

export const LogIn = function(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [modal, setModal] = useState(false);

	function handleSubmit() {
		const data = {
			email: email,
			password: password
		};

		console.log(data);
	}

	return (
		<>
			<section>
				<div className="row g-0">
					<div className="col-lg-7">
						<></>
					</div>

					<div className="col-lg-5 mb-4">
						<div className="logo-login px-lg-5 pt-lg-4 pb-lg-3 p-4 d-flex">
							<img
								className="logo-login"
								width="70"
								src="https://i.pinimg.com/236x/91/c8/4f/91c84f43dfafccb35658e04d56970834.jpg"
							/>
							<h2 className="align-self-center">ChipMarket</h2>
						</div>
						<hr />
						<div className="divider bg-warning"></div>
						<div className="title-login px-lg-5 py-lg-4 p-4 mt-4">
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
									className="btn btn-link text-muted text-decoration-none my-2"
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
								<Link
									to="/feed"
									type="button"
									className="btn btn-success w-100 mb-4"
									onClick={() => handleSubmit()}>
									Iniciar Sesión
								</Link>
							</form>
							<div className="btn btn-link  text-end">
								<Link to="/users" style={{ textDecoration: "none", color: "success" }}>
									¿Nuevo en ChipMarket? Pincha aquí
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
