import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import tibi from "../../img/tibi.png";
import kike from "../../img/kike.png";
import "../../styles/home.scss";

export const AboutUs = () => {
	// const params = useParams();

	const { store, actions } = useContext(Context);

	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<div className="row flex-column-reverse flex-md-row">
					<div className="col-md-8">
						<h1>
							<span> Tibisay Vielma Toro</span>
							{/* <span className="text-secondary">Will Catch Your Eye</span> */}
						</h1>
						<p className="lead">
							Full Stack Developer multitasking que puede mantener tus dientes sanos. Optimista
							empedernida. Más de 10 años de experiencia en atención al público y gestión de equipos.
							Amplia experiencia en el sector hospitalario. Enamorada del código y de este proyecto,
							pienso que juntos como sociedad podemos mejorar el mundo.
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
							Full Stack Developer, aficionado a aprender sobre las diferentes culturas del mundo, a un
							buen libro, al cine, a las excursiones por la naturaleza y los idiomas, habla Inglés y
							Francés. Encantado con la tecnologia y los beneficios que trae a la vida de las personas.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
