import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";

export const Home = () => {
	const items = [
		{
			src:
				"https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
			altText: "ChipAddict",
			caption: "Tu comercio de barrio al alcance de un click"
		},
		{
			src:
				"https://images.unsplash.com/photo-1509803992307-5ed1ac32efda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
			altText: "ChipAddict",
			caption: "Las mejores ofertas cerca de ti"
		},
		{
			src:
				"https://images.unsplash.com/photo-1603056724920-fdecbb3b7d37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
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

	const { store, actions } = useContext(Context);

	return (
		<div className="container my-5">
			<Carousel activeIndex={activeIndex} next={next} previous={previous}>
				<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
				{slides}
				<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
				<CarouselControl direction="next" directionText="Next" onClickHandler={next} />
			</Carousel>
			<br />
			<section>
				<div className="card my-5 border-0">
					<div className="row g-0">
						<div className="col-lg-4 d-flex justify-content-center">
							<img
								src="https://images.unsplash.com/photo-1580361543250-301150bf6551?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w5NjgzNjM5fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
								alt="..."
								className="rounded"
								style={{ width: "100%", height: "auto" }}
							/>
						</div>
						<div className="col-lg-8 my-5">
							<div className="card-body">
								<h5 className="card-title">UNA REALIDAD QUE PODEMOS MEJORAR JUNTOS.</h5>
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
				<div className="card mb-3 border-0 my-5">
					<div className="row g-0">
						<div className="col-lg-7 order-sm-2 order-lg-1">
							<div className="card-body">
								<h5 className="card-title">AHORRA TIEMPO Y DINERO</h5>
								<p className="card-text text-justify fs-2">
									¡Con ChipMarket es muy sencillo!. Simplemente introduciendo tu código postal puedes
									obtener las ofertas de los comercios cercanos a ti. Cada publicación tiene un código
									promocional para que aproveches ese descuento de ChipAddicts.
								</p>
							</div>
						</div>
						<div className="col-lg-5 order-sm-1 order-lg-2 rounded">
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
			<div className="card my-5 border-0">
				<section>
					<div className="row g-0">
						<div className="col-lg-4 d-flex justify-content-center">
							<img
								src="https://images.unsplash.com/photo-1570358934836-6802981e481e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fG9uZSUyMHdvcmxkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
								alt="..."
								className="rounded"
								style={{ width: "98%", height: "auto" }}
							/>
						</div>
						<div className="col-lg-8 my-5">
							<div className="card-body">
								<h5 className="card-title">JUNTOS COMO CIUDADANOS DEL MUNDO.</h5>
								<p className="card-text text-justify fs-2">
									Nuestra comunidad existe como apoyo al emprendedor, la fusión entre la tecnología y
									las tiendas de toda la vida va a aumentar el consumo al comercio de barrio. La
									simbiosis entre ciudadanos darán el progreso a la sociedad.
								</p>
							</div>
						</div>
					</div>
				</section>

				<div className="container d-flex flex-lg-row align-space-between row" style={{ margin: "20px 0" }}>
					<div className="card text-dark bg-light col-md-6 col-lg-4 col-12" style={{}}>
						<div className="card-body ">
							<p className="card-text ">
								ChipMarket es una red social que crece gracias a ti. Desde tu perfil podrás disfrutar de
								las ofertas únicas para ChipAddicts.
							</p>
							<Link to="register" style={{ textDecoration: "none", color: "green" }} className="">
								Únete
							</Link>
						</div>
					</div>
					<div className="card text-dark bg-light col-md-6 col-lg-4 col-12" style={{}}>
						<div className="card-body ">
							<p className="card-text">
								¿Eres un comercio?, si te das de alta con ChipMarket podrás aparecer en la búsqueda por
								Código Postal de los usuarios, tendrás tu perfil en donde cada post será la entrada a
								nuevos clientes.
							</p>
							<Link to="register" style={{ textDecoration: "none", color: "green" }} className="">
								Únete
							</Link>
						</div>
					</div>
					<div className="card text-dark bg-light col-md-12 col-lg-4 col-12" style={{}}>
						<div className="card-body ">
							<p className="card-text ">
								El sentido es muy importante para nosotros, evitemos que más autónomos cierren sus
								negocios. Tomemos consciencia y apoyemos al comercio local.
							</p>
							<Link to="register" style={{ textDecoration: "none", color: "green" }} className="">
								Únete
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
