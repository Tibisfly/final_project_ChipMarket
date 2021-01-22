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
	const items = [
		{
			src:
				"https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
			altText: "ChipAddict",
			caption: ""
		},
		{
			src:
				"https://images.unsplash.com/photo-1605043145824-470f996f9fe3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
			altText: "ChipAddict",
			caption: ""
		},
		{
			src:
				"https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80",
			altText: "ChipAddict",
			caption: ""
		}
	];

	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = newIndex => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map(item => {
		return (
			<CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
				<img src={item.src} alt={item.altText} id="carousel" />
				<CarouselCaption captionText={item.caption} captionHeader={item.caption} />
			</CarouselItem>
		);
	});

	return (
		<>
			<section>
				<div className="row g-0">
					<div className="col-lg-7">
						<Carousel activeIndex={activeIndex} next={next} previous={previous}>
							<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
							{slides}
							<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
							<CarouselControl direction="next" directionText="Next" onClickHandler={next} />
						</Carousel>
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
								<div
									className="error fw-bold"
									style={{
										display: store.error != null ? "block" : "none",
										fontSize: "20px",
										color: "red"
									}}>
									<p>Usuario y contraseña incorrectos</p>
								</div>
							</form>
							<div className="btn btn-link d-flex flex-row-reverse text-end w-100">
								<Link to="/register" style={{ textDecoration: "none", color: "green" }}>
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
