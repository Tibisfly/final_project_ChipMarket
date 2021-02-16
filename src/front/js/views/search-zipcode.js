import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import { Register } from "./register.js";
import MapTest from "../components/map-view.js";
import "../../styles/home.scss";

export const SearchZipCode = function(props) {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12">
						<div className="container-fluid ">
							<div className="title-search-zipcode">
								Sigue a los comercios más cerca de ti. Reclama tu oferta en el local con el código
								promocional que encontrarás en cada publicación.
							</div>
							{/* <div className="title-search-zipcode">
								Utiliza la barra superior para encontrar los comercios más cercanos a ti. Sigue a los
								comercios y reclama tu oferta en el local con el código promocional que encontrarás en
								cada publicación.
							</div> */}
						</div>
					</div>
				</div>
			</div>

			<MapTest />

			<div className="container-fluid mb-3">
				<div className="row no-gutters">
					<div className="col-4">
						<div className="card" style={{ width: "100%" }}>
							<Link to={`/feed/commerce/1`}>
								<img
									src="https://picsum.photos/800/600?random=2"
									className="card-img-top"
									alt="imagen1"
								/>
							</Link>
						</div>
					</div>
					<div className="col-4">
						<Link to={`/feed/commerce/2`}>
							<img src="https://picsum.photos/800/600?random=5" className="card-img-top" alt="imagen2" />
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/feed/commerce/3`}>
							<img src="https://picsum.photos/800/600?random=7" className="card-img-top" alt="imagen3" />
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/feed/commerce/4`}>
							<img src="https://picsum.photos/800/600?random=3" className="card-img-top" alt="imagen4" />
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/feed/commerce/5`}>
							<img src="https://picsum.photos/800/600?random=8" className="card-img-top" alt="imagen5" />
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/feed/commerce/6`}>
							<img src="https://picsum.photos/800/600?random=9" className="card-img-top" alt="imagen6" />
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/feed/commerce/1`}>
							<img src="https://picsum.photos/800/600?random=10" className="card-img-top" alt="imagen7" />
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/feed/commerce/1`}>
							<img src="https://picsum.photos/800/600?random=3" className="card-img-top" alt="imagen8" />
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/feed/commerce/1`}>
							<img src="https://picsum.photos/800/600?random=6" className="card-img-top" alt="imagen9" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

// SearchZipCode.propTypes = {
// 	postId: PropTypes.int
// };
