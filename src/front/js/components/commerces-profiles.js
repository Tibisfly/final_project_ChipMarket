import React from "react";
import PropTypes from "prop-types";

export const CommercesProfiles = function(props) {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<img
							className="profile-pic   rounded"
							src="https://images.unsplash.com/photo-1560105214-ad76e8531c42?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
							style={{ width: "100%" }}
						/>
					</div>
					<div className="col-lg-8" style={{ margin: "" }}>
						<h3 className="d-block font-weight-bold" style={{ color: "green" }}>
							{props.businessName}
						</h3>
						<h5 className="d-block  ">{props.streetName}</h5>
						<h5 className="d-block  ">{props.streetNumber}</h5>
						<h5 className="d-block  ">{props.city}</h5>
						<h5 className="d-block  ">{props.country}</h5>
						<h5 className="d-block  ">{props.zipCode}</h5>
						<h5 className="d-block  ">{props.phoneNumber}</h5>
						<h5 className="d-block  ">{props.website}</h5>
					</div>
				</div>
			</div>
		</>
	);
};

CommercesProfiles.propTypes = {
	businessName: PropTypes.string,
	streetName: PropTypes.string,
	streetNumber: PropTypes.string,
	city: PropTypes.string,
	country: PropTypes.string,
	zipCode: PropTypes.string,
	phoneNumber: PropTypes.string,
	website: PropTypes.string
};
