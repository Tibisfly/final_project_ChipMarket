import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="text-center mt-5">
				<h1>Bienvenido a Chip Market, este es el home</h1>
			</div>

			<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
				<ol className="carousel-indicators">
					<li
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="0"
						interval="5000"
						pause="hover"
						className="active"></li>
					<li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1">
						Prueba de texto 1
					</li>
					<li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://i.picsum.photos/id/1068/7117/4090.jpg?hmac=Y6xHXrzHsNlbRTbhzZ53Yk-Ux9lUECBLbbP4wb5a1qY"
							className="d-block w-100"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://i.picsum.photos/id/160/3200/2119.jpg?hmac=cz68HnnDt3XttIwIFu5ymcvkCp-YbkEBAM-Zgq-4DHE"
							className="d-block w-100"
							alt="..."
						/>
					</div>
					<div className="carousel-item">
						<img src="https://picsum.photos/id/175/367/267" className="d-block w-100" alt="..." />
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleIndicators"
					role="button"
					data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleIndicators"
					role="button"
					data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</a>
			</div>
			<br />
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4 rounded-pill">
						<img src="https://i.pinimg.com/236x/c0/73/a5/c073a5bf67337759411f80aad9588d58.jpg" alt="..." />
					</div>
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
			</div>
			{/* <div className="text-center mt-5">
				<h1>Hello Rigo!</h1>
				<p>
					<img src={rigoImageUrl} />
				</p>
				<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div>
				<p>
					This boilerplate comes with lots of documentation:{" "}
					<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
						Read documentation
					</a>
				</p>
			</div> */}
		</div>
	);
};
