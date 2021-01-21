import React from "react";
import PropTypes from "prop-types";

export const CommercesProfiles = function(props) {
	return (
		<>
			<div className="d-flex mb-4">
				<div>
					<img
						className="profile-pic  mr-3"
						src="https://i.pinimg.com/236x/c3/59/4f/c3594fb14297bd3cf16e43efc8a354a9.jpg"
					/>
					<p className="d-block font-weight-bold mb-0 mt-4">{props.businessName}</p>
					<p className="d-block  mb-0 mt-4">{props.streetName}</p>
					<p className="d-block  mb-0 mt-4">{props.streetNumber}</p>
					<p className="d-block  mb-0 mt-4">{props.city}</p>
					<p className="d-block  mb-0 mt-4">{props.zipCode}</p>
					<p className="d-block  mb-0 mt-4">{props.phoneNumber}</p>
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
	phoneNumber: PropTypes.string
};
