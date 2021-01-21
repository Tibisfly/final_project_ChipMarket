import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import tibi from "../../img/tibi.png";
import kike from "../../img/kike.png";

export const AboutUs = () => {
	// const params = useParams();

	const { store, actions } = useContext(Context);

	return (
		<div className="jumbotron jumbotron-fluid bg-white">
			<div className="container">
				<div className="row flex-column-reverse flex-md-row">
					<div className="col-md-8">
						<h1>
							<span> Tibisay Vielma Toro</span>
							{/* <span className="text-secondary">Will Catch Your Eye</span> */}
						</h1>
						<p className="lead">
							Lorem fistrum a peich nisi benemeritaar benemeritaar esse ahorarr pupita. Mamaar ese pedazo
							de papaar papaar ad por la gloria de mi madre elit duis aute diodenoo. Sed llevame al sircoo
							hasta luego Lucas nisi caballo blanco caballo negroorl. Papaar ad por la gloria de mi madre
							elit duis aute diodenoo. Sed llevame al sircoo hasta luego Lucas nisi caballo blanco caballo
							negroorl.
						</p>
					</div>
					<br></br>
					<div className="col-md-4">
						<img src={tibi} className="rounded-circle img-thumbnail border-0" alt="Tibi" />
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row flex-column-reverse flex-md-row">
					<div className="col-md-4">
						<img src={kike} className="rounded-circle img-thumbnail border-0" alt="Tibi" />
					</div>
					<div className="col-md-8">
						<h1>
							<span> Enrique Rodriguez Cepeda</span>
							{/* <span className="text-secondary">Will Catch Your Eye</span> */}
						</h1>
						<p className="lead">
							Lorem fistrum a peich nisi benemeritaar benemeritaar esse ahorarr pupita. Mamaar ese pedazo
							de papaar papaar ad por la gloria de mi madre elit duis aute diodenoo. Sed llevame al sircoo
							hasta luego Lucas nisi caballo blanco caballo negroorl. Papaar ad por la gloria de mi madre
							elit duis aute diodenoo. Sed llevame al sircoo hasta luego Lucas nisi caballo blanco caballo
							negroorl.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
