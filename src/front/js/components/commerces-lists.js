import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { DropdownItem } from "reactstrap";
import "../../styles/feed.scss";

export const CommercesLists = function(props) {
	if (!props.commerces) {
		return <div className="cargando">Aún no sigues a ningún comercio.</div>;
	}

	return (
		<>
			<div>
				<p className="font-weight-bold title-following">{props.title}</p>
			</div>
			<div className="commerces-container">
				{props.commerces.map((commerce, index) => {
					return (
						<div className="d-flex mb-4" key={index}>
							<small className="font-weight-bold">
								<Link
									to={`/feed/commerce/${commerce.commerce_id}`}
									className="text-decoration-none text-dark">
									{commerce.business_name}
								</Link>
							</small>
						</div>
					);
				})}
			</div>
		</>
	);
};

CommercesLists.propTypes = {
	title: PropTypes.string,
	commerces: PropTypes.array,
	addCommerce: PropTypes.string,
	url: PropTypes.string
};
