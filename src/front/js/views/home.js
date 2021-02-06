import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Map from "../components/map.js";
import MapTest from "../components/map-view.js";
import { Navbar } from "../components/navbar.js";
import credentials from "../components/credentials.js";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";
import manoConIphone from "../../img/chipmarket.png";
import chipMarket from "../../img/chipmarket.png";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="hero">
				<h1 className="home-title">
					Ahorra tiempo y dinero <p>Prueba</p>
				</h1>
			</div>
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
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-1" />
					<div className="col-12 col-lg-10 text-center">
						<h2 className="home-main-text-div">
							<div className="is-inview">Weflow is a physical,</div>
							<div className="is-inview">mental and spiritual</div>
							<div className="is-inview">journey through </div>
							<div className="is-inview">mindful movement </div>
						</h2>
					</div>
				</div>
			</div>
			<div>
				{/* <Map
					googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`}
					containerElement={<div className="maps-container-element" />}
					mapElement={<div className="maps-element" />}
					loadingElement={<p>Cargando</p>}
				/> */}
				<MapTest />
			</div>
			<br />
			<section>
				<div className="card my-5 border-0" style={{ backgroundColor: "#fcf8f2" }}>
					<div
						className="row g-0"
						style={{ marginBottom: "6rem", marginTop: "6rem", backgroundColor: "#fcf8f2" }}>
						<div className="col-lg-4 d-flex justify-content-center">
							<img
								src="https://images.unsplash.com/photo-1580361543250-301150bf6551?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w5NjgzNjM5fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
								alt="..."
								className="rounded"
								style={{ width: "100%", height: "auto" }}
							/>
						</div>
						<div className="col-lg-8 my-5">
							<div className="card-body ">
								<h5
									className="card-title font-weight-bold"
									style={{ color: "green", fontWeight: "1.5rem" }}>
									UNA REALIDAD QUE PODEMOS MEJORAR JUNTOS.
								</h5>
								<p className="card-text text-justify fs-2">
									No es secreto que el año 2020 fue duro para todos, pero aún más para personas muy
									cercanas a ti: El comerciante de barrio. Fruterías, ferreterías, restaurantes,
									peluquerías y variedad de comercios se han visto afectados por el confinamiento del
									2020. Más del 5% de comercios de barrio han cerrado en España por motivo al
									coronavirus.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="card mb-3 border-0 my-5" style={{ backgroundColor: "#fcf8f2" }}>
					<div
						className="row g-0"
						style={{ marginBottom: "6rem", marginTop: "6rem", backgroundColor: "#fcf8f2" }}>
						<div className="col-lg-7 order-sm-2 order-lg-1">
							<div className="card-body" style={{ marginBotton: "30px" }}>
								<h5
									className="card-title font-weight-bold"
									style={{ color: "green", fontWeight: "1.5rem" }}>
									AHORRA TIEMPO Y DINERO
								</h5>
								<p className="card-text text-justify fs-2">
									¡Con ChipMarket es muy sencillo!. Simplemente introduciendo tu código postal puedes
									obtener las ofertas de los comercios cercanos a ti. Cada publicación tiene un código
									promocional para que aproveches ese descuento de ChipAddicts.
								</p>
							</div>
						</div>
						<div className="col-lg-5 order-sm-1 order-lg-2 rounded" style={{ marginBotton: "30px" }}>
							<img
								src="https://images.unsplash.com/photo-1560472355-536de3962603?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
								alt="..."
								className="rounded img-mobile"
								style={{ height: "auto" }}
							/>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="card my-5 border-0" style={{ backgroundColor: "#fcf8f2" }}>
					<div
						className="row g-0 my-5"
						style={{ marginBottom: "6rem", marginTop: "6rem", backgroundColor: "#fcf8f2" }}>
						<div className="col-lg-4 d-flex justify-content-center">
							<img
								src="https://images.unsplash.com/photo-1570358934836-6802981e481e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fG9uZSUyMHdvcmxkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
								alt="..."
								className="rounded"
								style={{ width: "98%", height: "auto" }}
							/>
						</div>
						<div className="col-lg-8 my-5">
							<div className="card-body" style={{ marginBottom: "3 rem" }}>
								<h5
									className="card-title font-weight-bold"
									style={{ color: "green", fontWeight: "1.5rem" }}>
									JUNTOS COMO CIUDADANOS DEL MUNDO.
								</h5>
								<p className="card-text text-justify fs-2">
									Nuestra comunidad existe como apoyo al emprendedor, la fusión entre la tecnología y
									las tiendas de toda la vida va a aumentar el consumo al comercio de barrio. La
									simbiosis entre ciudadanos darán el progreso a la sociedad.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<div
						className="row"
						style={{ marginBottom: "6rem", marginTop: "6rem", backgroundColor: "#fcf8f2" }}>
						<div className="text-center mt-5 col-md-4 col-12">
							<div className="card-vertical-v2020 v2020 p-4">
								<div className="card-vertical-v2020--image mx-auto">
									<img
										src="https://i.ebayimg.com/images/g/bgAAAOSwDnleIgL-/s-l640.jpg"
										style={{ width: "50%", marginTop: "-2rem", paddingTop: "10px" }}
									/>
								</div>
								<Link to="/register" className="text-decoration-none" style={{ color: "black" }}>
									<div className="card-vertical-v2020--text mx-2">
										<h5>FÁCIL USO</h5>
										<p>
											ChipMarket es una red social que crece gracias a ti. Desde tu perfil podrás
											disfrutar de las ofertas únicas para ChipAddicts.
										</p>
									</div>
								</Link>
							</div>
						</div>
						<div className="text-center mt-5 col-md-4 col-12">
							<div className="card-vertical-v2020 v2020 p-4">
								<div className="card-vertical-v2020--image mx-auto">
									<img
										src="https://upload.wikimedia.org/wikipedia/en/2/26/Common_face_of_one_euro_coin.jpg"
										style={{ width: "35%", marginTop: "-1rem", paddingTop: "10px" }}
									/>
								</div>
								<Link to="/register" className="text-decoration-none" style={{ color: "black" }}>
									<div className="card-vertical-v2020--text mx-2">
										<h5>POTENCIA TU NEGOCIO</h5>
										<p>
											¿Eres un comercio?, si te das de alta con ChipMarket podrás aparecer en la
											búsqueda por Código Postal de los usuarios, tendrás tu perfil en donde cada
											post será la entrada a nuevos clientes.
										</p>
									</div>
								</Link>
							</div>
						</div>
						<div className="text-center mt-5 col-md-4 col-12">
							<div className="card-vertical-v2020 v2020 p-4">
								<div className="card-vertical-v2020--image mx-auto">
									<img
										src="https://www.codot.gov/business/civilrights/assets/team-icon.png/@@images/image.png"
										style={{ width: "35%", marginTop: "-1rem", paddingTop: "10px" }}
									/>
								</div>
								<Link to="/register" className="text-decoration-none" style={{ color: "black" }}>
									<div className="card-vertical-v2020--text mx-2">
										<h5>CORRE LA VOZ</h5>
										<p>
											El sentido es muy importante para nosotros, evitemos que más autónomos
											cierren sus negocios. Invita a que más comercios formen parte de esta red.
											En la unión está la fuerza.
										</p>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* </div> */}
		</div>
	);
};
