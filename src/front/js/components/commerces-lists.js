import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CommercesLists = function(props) {
	return (
		<>
			<div className="card">
				<div className="card-body">
					<div>
						<p className="font-weight-bold text-muted">{props.title}</p>
					</div>
					<div className="commerces-container">
						{/* aqui haces el map de todo este div className con los comercios creados y los comercios seguidos */}
						<div className="d-flex mb-4">
							<small className="font-weight-bold">
								<Link to="/commerces/profiles" className="text-decoration-none text-dark">
									{props.commerce}
								</Link>
							</small>
						</div>
						<div className="d-flex mb-4">
							<small className="font-weight-bold">
								<Link to="/commerces/profiles" className="text-decoration-none text-dark">
									{props.commerce}
								</Link>
							</small>
						</div>
						<div className="d-flex mb-4">
							<small className="font-weight-bold">
								<Link to="/commerces/profiles" className="text-decoration-none text-dark">
									{props.commerce}
								</Link>
							</small>
						</div>
						<div className="d-flex mb-4">
							<small className="font-weight-bold">
								<Link to="/commerces/profiles" className="text-decoration-none text-dark">
									{props.commerce}
								</Link>
							</small>
						</div>
						<div className="d-flex mb-4">
							<small className="font-weight-bold">
								<Link to="/commerces/profiles" className="text-decoration-none text-dark">
									{props.commerce}
								</Link>
							</small>
						</div>
						<div className="d-flex mb-4">
							<small className="font-weight-bold">
								<Link to="/commerces/profiles" className="text-decoration-none text-dark">
									{props.commerce}
								</Link>
							</small>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

CommercesLists.propTypes = {
	title: PropTypes.string,
	commerce: PropTypes.string
};
