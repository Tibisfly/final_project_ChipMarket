import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import { Register } from "./register.js";

export const SearchZipCode = function(props) {
	return (
		<>
			<div className="container my-3">
				<div className="row">
					<div className="col-lg-10">
						<div className="card">
							<div className="card-body d-flex ">
								<img
									src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=80"
									className="rounded"
									alt="imagen3"
									style={{ width: "20%", height: "auto" }}
								/>
								<div className="card-body">
									<h3 className="text-center font-weight-bold text-success">ChipAddict</h3>
									<h4 className="text-center mt-3">
										Estos son los comercios más cercanos a tu ubicación actual, para disfrutar de
										las promociones debes seguir al ChipCommerce.
									</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
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
