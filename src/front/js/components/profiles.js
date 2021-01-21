import React from "react";
import PropTypes from "prop-types";

export const Profiles = function(props) {
	return (
		<>
			<div className="d-flex mb-4">
				<div>
					<img
						className="profile-pic rounded-circle mr-3"
						src="https://i.pinimg.com/474x/ea/12/1a/ea121ab5c320603cc21b2498429110ca.jpg"
					/>
					<p className="d-block font-weight-bold mb-0 mt-4">{props.username}</p>
					<small className="text-muted">
						{props.firstName} {props.lastName}
					</small>
				</div>
			</div>
		</>
	);
};

Profiles.propTypes = {
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	username: PropTypes.string
};
