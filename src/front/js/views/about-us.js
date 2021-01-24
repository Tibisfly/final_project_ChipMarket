import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import tibi from "../../img/tibi.png";
import kike from "../../img/kike.png";
import "../../styles/home.scss";

export const AboutUs = () => {
	// const params = useParams();

	const { store, actions } = useContext(Context);

	return (
		<div className="jumbotron jumbotron-fluid" style={{ backgroundColor: "#fcf8f2" }}>
			<div className="container">
				<div className="row flex-column-reverse flex-md-row">
					<div className="col-md-8">
						<h1>
							<span> Tibisay Vielma Toro</span>
							{/* <span className="text-secondary">Will Catch Your Eye</span> */}
						</h1>
						<p className="lead">
							Full Stack Developer multitasking que puede mantener tus dientes sanos. Optimista
							empedernida.
						</p>
					</div>
					<br></br>
					<div className="col-md-4">
						<img src={tibi} className="rounded-circle img-thumbnail border-0" alt="Tibi" />
					</div>
				</div>
			</div>
			<br />
			<div className="container">
				<div className="row flex-column-reverse flex-md-row">
					<div className="col-md-4">
						<img src={kike} className="rounded-circle img-thumbnail border-0" alt="Tibi" />
					</div>
					<div className="col-md-8">
						<h1>
							<span> Enrique Rodriguez Cepeda</span>
							{/* <span className="text-secondary">Full-Stack Developer</span> */}
						</h1>
						<p className="lead">
							Hace más de doce años que trabajo en diseño y desarrollo de productos digitales en la
							intersección entre tecnología, diseño y negocio. He participado tanto en pequeños proyectos
							como en grandes empresa. Mi experiencia y formación adquirida en marketing, comunicación y
							desarrollo de negocio me han preparado para definir soluciones y liderar su implementación
							práctica. Mi perfil multidisciplinar me ha permitido abordar proyectos con un enfoque
							creativo, innovador y orientado a resultados, con el desafío personal de encontrar para cada
							situación la mejor vía de generación de valor con los medios disponibles. Me desenvuelvo con
							facilidad y confianza tanto en contextos técnicos como de negocio, con gran capacidad
							comunicativa en español, inglés y francés, incluso en situaciones multiculturales.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
