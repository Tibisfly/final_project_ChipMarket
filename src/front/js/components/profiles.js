import React from "react";
import PropTypes from "prop-types";

export const Profiles = function(props) {
	return (
		<>
			<div className="d-flex mb-4">
				<div>
					<h1 className="d-block font-weight-bold mb-0 mt-4">{props.username}</h1>
					<br />
					<h2 className="text-muted">
						{props.firstName} {props.lastName}
					</h2>
					<img
						className="profile-pic mr-3 rounded"
						src="https://i.pinimg.com/236x/d6/8e/84/d68e84d27da437b9079f39c6428d4f83.jpg"
					/>
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
