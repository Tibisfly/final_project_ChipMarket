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
							<div className="card-body">
								<p className="text-center font-weight-bold text-success">ChipAddict</p>
								<p className="text-center">Estos son los comercios más cercanos a tu Zip Code</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid mb-3">
				<div className="row no-gutters">
					<div className="col-4">
						<div className="card" style={{ width: "100%" }}>
							<Link to={`/post/${props.postId}`}>
								<img
									src="https://picsum.photos/800/600?random=2"
									className="card-img-top"
									alt="imagen1"
								/>
							</Link>
						</div>
					</div>
					<div className="col-4">
						<Link to={`/post/${props.postId}`}>
							<img src="https://picsum.photos/800/600?random=5" className="card-img-top" alt="imagen2" />
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/post/${props.postId}`}>
							<img src="https://picsum.photos/800/600?random=7" className="card-img-top" alt="imagen3" />
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/post/${props.postId}`}>
							<img src="https://picsum.photos/800/600?random=3" className="card-img-top" alt="imagen4" />
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/post/${props.postId}`}>
							<img src="https://picsum.photos/800/600?random=8" className="card-img-top" alt="imagen5" />
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/post/${props.postId}`}>
							<img src="https://picsum.photos/800/600?random=9" className="card-img-top" alt="imagen6" />
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/post/${props.postId}`}>
							<img src="https://picsum.photos/800/600?random=10" className="card-img-top" alt="imagen7" />
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/post/${props.postId}`}>
							<img src="https://picsum.photos/800/600?random=3" className="card-img-top" alt="imagen8" />
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/post/${props.postId}`}>
							<img src="https://picsum.photos/800/600?random=6" className="card-img-top" alt="imagen9" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

SearchZipCode.propTypes = {
	postId: PropTypes.int
};
