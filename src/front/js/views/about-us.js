import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const AboutUs = () => {
	// const params = useParams();

	const { store, actions } = useContext(Context);

	return (
		<div className="jumbotron jumbotron-fluid bg-white">
			<div className="container">
				<div className="row flex-column-reverse flex-md-row">
					<div className="col-md-8">
						<h1>
							<span> This First Heading</span>
							<span className="text-secondary">Will Catch Your Eye</span>
						</h1>
						<p className="lead">
							Lorem fistrum a peich nisi benemeritaar benemeritaar esse ahorarr pupita. Mamaar ese pedazo
							de papaar papaar ad por la gloria de mi madre elit duis aute diodenoo. Sed llevame al sircoo
							hasta luego Lucas nisi caballo blanco caballo negroorl.
						</p>
					</div>
					<div className="col-md-4">
						<img src="assets/img/1.jpg" className="rounded-circle img-thumbnail border-0" alt="mr.white" />
					</div>
				</div>
			</div>
		</div>
	);
};
