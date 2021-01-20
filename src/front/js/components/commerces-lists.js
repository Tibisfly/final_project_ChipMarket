import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CommercesLists = function(props) {
	if (!props.commerces) {
		return <div>Cargando. . .</div>;
	}
	return (
		<>
			<div className="card">
				<div className="card-body">
					<div>
						<p className="font-weight-bold text-muted">{props.title}</p>
					</div>
					<div className="commerces-container">
						{props.commerces.map((commerce, index) => {
							return (
								<div className="d-flex mb-4" key={index}>
									<small className="font-weight-bold">
										<Link to="/commerces/profiles" className="text-decoration-none text-dark">
											{commerce.business_name}
										</Link>
									</small>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

CommercesLists.propTypes = {
	title: PropTypes.string,
	commerces: PropTypes.array
};
