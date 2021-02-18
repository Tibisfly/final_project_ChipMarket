import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { DropdownItem } from "reactstrap";
import "../../styles/feed.scss";

export const CommercesLists = function(props) {
	if (!props.commerces) {
		return <div className="font-weight-bold cargando">No hay comercios.</div>;
	} else {
		if (props.commerces.length < 1) {
			return <div className="font-weight-bold cargando">No hay comercios.</div>;
		}
	}

	return (
		<>
			<div>
				<p className="font-weight-bold title-following">{props.title}</p>
			</div>
			<div className="commerces-container">
				<div className="d-flex mb-4">
					{props.commerces.map((commerce, index) => {
						return (
							<div key={index}>
								<Link
									to={`/feed/commerce/${commerce.id}`}
									className="mr-5 font-weight-bold text-decoration-none text-dark">
									{commerce.business_name}
								</Link>
							</div>
						);
					})}
				</div>
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
