import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<section className="py-3">
				<div className="container">
					<div className="carousel-item active">
						<h1 className="text-center my-5" id="home-title">
							Ahorra tiempo y dinero
							<br />
							mientras aportas un grano de arena
						</h1>
					</div>
					<img
						src="https://images.unsplash.com/photo-1584937248081-634bb38393fc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
						className="img-home d-block w-100"
					/>
					<br />
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">AHORRA TIEMPO Y DINERO</h5>
							<p className="card-text">
								Al alcance de un click podrás conseguir las mejores ofertas cerca de ti. Introduce el
								código postal de la zona y disfruta de los beneficios de ser ChipAddict
							</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
