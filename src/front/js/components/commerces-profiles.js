import React from "react";
import PropTypes from "prop-types";

export const CommercesProfiles = function(props) {
	return (
		<>
			<div className="d-flex mb-4">
				<div>
					<img
						className="profile-pic rounded-circle mr-3"
						src="https://i.pinimg.com/236x/34/dd/f2/34ddf290ab42740d1ff1673cf5796f72.jpg"
					/>
					<p className="d-block font-weight-bold mb-0 mt-4">{props.busisnessName}</p>
					<small className="text-muted">{props.streetName}</small>
					<small className="text-muted">{props.streetNumber}</small>
					<small className="text-muted">{props.city}</small>
					<small className="text-muted">{props.zipCode}</small>
					<small className="text-muted">{props.phoneNumber}</small>
				</div>
			</div>
		</>
	);
};

CommercesProfiles.propTypes = {
	busisnessName: PropTypes.string,
	streetName: PropTypes.string,
	streetNumber: PropTypes.string,
	city: PropTypes.string,
	zipCode: PropTypes.string,
	phoneNumber: PropTypes.string
};
