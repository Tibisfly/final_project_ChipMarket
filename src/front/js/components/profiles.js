import React from "react";
import PropTypes from "prop-types";

export const Profiles = function(props) {
	return (
		<>
			<div className="d-flex mb-4">
				<div>
					<img
						className="profile-pic mr-3 rounded-circle"
						src="https://i.pinimg.com/236x/d6/8e/84/d68e84d27da437b9079f39c6428d4f83.jpg"
					/>

					<p className="d-block font-weight-bold mb-0 mt-4">{props.username}</p>
					<br />
					<p className="text-muted">
						{props.firstName} {props.lastName}
					</p>
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
