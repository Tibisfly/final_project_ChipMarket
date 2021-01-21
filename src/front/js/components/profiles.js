import React from "react";
import PropTypes from "prop-types";

export const Profiles = function(props) {
	return (
		<>
			<div className="d-flex mb-4">
				<div>
					<img
						className="profile-pic mr-3"
						src="https://i.pinimg.com/236x/5e/21/b5/5e21b5fa45cc04f8fd35537496ebe6d0.jpg"
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
