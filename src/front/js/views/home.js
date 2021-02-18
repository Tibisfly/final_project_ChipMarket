import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../components/navbar.js";
import manoConIphone from "../../img/chipmarket.png";
import chipMarket from "../../img/chipmarket.png";
import patillaReloj from "../../img/patilla-reloj.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container-fluid">
				<div className="row g-0">
					<div id="home-izq" className="col-lg-6 col-md-6 col-12 home-izq">
						<div className="message-content">
							<div className="title-banner">Ahorra tiempo y dinero</div>
							<div className="message-banner">
								<p className="mientras">Mientras apoyas al comercio local.</p>
								<p> Únete a nuestra comunidad y descubre ofertas únicas cerca de ti.</p>
							</div>
							<div className="botones-banner">
								<Link to="/register">
									<button
										type="button"
										className="banner-user-button btn btn-info rounded-pill button-green">
										¿Eres un Usuario?
									</button>
								</Link>
								<Link to="/commerces">
									<button
										type="button"
										className="banner-commerce-button btn btn-info rounded-pill button-green">
										¿Eres un Comercio?
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-12 home-der">
						<div className="goop goop__SvgWrapper-sc-1g583nk-1 ddrtzv home" color="bg.default">
							<svg
								fillRule="evenodd"
								clipRule="evenodd"
								xmlns="http://www.w3.org/2000/svg"
								aria-labelledby="title"
								viewBox="0 0 1920 240"
								id="goop"
								className="goop__InlineSvg-sc-1g583nk-0 cCVJVf">
								<title id="title">goop</title>
								<g>
									<path d="M1920,144.5l0,95.5l-1920,0l0,-65.5c196,-36 452.146,-15.726 657.5,8.5c229.698,27.098 870,57 1262.5,-38.5Z"></path>
								</g>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div className="container-principal-msg">
				<div className="container">
					<div className="home-principal-msg">
						Según tu localización encontrarás comercios cercanos con ofertas únicas para ChipAddicts.{" "}
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row fila-sup">
					<div className="col-lg-7 order-lg-1 order-2">
						<img
							className="img-landing"
							src="https://image.freepik.com/foto-gratis/seccion-intermedia-personal-masculino-sosteniendo-pizarra-seccion-organica_107420-90620.jpg"
						/>
					</div>
					<div className="text-landing text-landing-top col-lg-5 order-lg-2 order-1">
						<h3>UNA REALIDAD</h3>
						<p>
							Sabías que por motivo a la pandemia del 2020 más del 7% de comercios de barrio han cerrado
							en España por no poder mantenerse.
						</p>
					</div>
				</div>
				<div className="row fila-inf">
					<div className="text-landing text-landing-bottom col-lg-6 ">
						<h3>SOLUCIÓN EFICAZ PARA LOS COMERCIOS.</h3>
						<p>
							Nuestra comunidad existe como apoyo al emprendedor, la fusión entre la tecnología y las
							tiendas de toda la vida va a aumentar el consumo al comercio de barrio. La simbiosis entre
							ciudadanos darán el progreso a la sociedad.
						</p>
					</div>
					<div className="col-lg-6">
						<img
							className="img-landing"
							src="https://image.freepik.com/foto-gratis/pareja-reabriendo-pequenos-negocios_23-2148604374.jpg"
						/>
					</div>
				</div>
				{/* 
				<div className="home-location-div">
					<div className="testing">
						Introduce tu código postal en la barra de búsqueda, sigue a tu comercio y disfruta de las
						promociones. Queremos que te sea familiar, así que nos comportamos como una red social.
					</div>
				</div> */}
			</div>
			<div className="container-fluid three-cards-container">
				<section className="three-cards">
					<div className="container">
						<div className="row" style={{ marginBottom: "6rem", marginTop: "6rem" }}>
							<div className="text-center mt-5 col-lg-4 col-12">
								<Link to="/register" className="text-decoration-none" style={{ color: "black" }}>
									<div className="card-vertical-v2020 v2020 p-4">
										<div className="card-vertical-v2020--image mx-auto">
											<img src={patillaReloj} />
										</div>
										<div className="card-vertical-v2020--text mx-2">
											<h5>FÁCIL USO</h5>
											<p>
												ChipMarket es una red social que crece gracias a ti. Desde tu perfil
												podrás disfrutar de las ofertas únicas para ChipAddicts.
											</p>
										</div>
									</div>
								</Link>
							</div>
							<div className="text-center mt-5 col-lg-4 col-12">
								<Link to="/register" className="text-decoration-none" style={{ color: "black" }}>
									<div className="card-vertical-v2020 v2020 p-4">
										<div className="card-vertical-v2020--image mx-auto">
											<img src="https://upload.wikimedia.org/wikipedia/en/2/26/Common_face_of_one_euro_coin.jpg" />
										</div>

										<div className="card-vertical-v2020--text mx-2">
											<h5>POTENCIA TU NEGOCIO</h5>
											<p>
												¿Eres un comercio?, si te das de alta con ChipMarket podrás aparecer en
												la búsqueda por Código Postal de los usuarios, tendrás tu perfil en
												donde cada post será la entrada a nuevos clientes.
											</p>
										</div>
									</div>
								</Link>
							</div>
							<div className="text-center mt-5 col-lg-4 col-12">
								<Link to="/register" className="text-decoration-none" style={{ color: "black" }}>
									<div className="card-vertical-v2020 v2020 p-4">
										<div className="card-vertical-v2020--image mx-auto">
											<img src="https://www.codot.gov/business/civilrights/assets/team-icon.png/@@images/image.png" />
										</div>
										<div className="card-vertical-v2020--text mx-2">
											<h5>CORRE LA VOZ</h5>
											<p>
												El sentido es muy importante para nosotros, evitemos que más autónomos
												cierren sus negocios. Invita a que más comercios formen parte de esta
												red. En la unión está la fuerza.
											</p>
										</div>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
