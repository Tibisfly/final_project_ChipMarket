import React from "react";
import PropTypes from "prop-types";

export const Profiles = function(props) {
	return (
		<>
			<div className="d-flex mb-4">
				<div>
					<h2 className="d-block font-weight-bold mb-0 mt-4" style={{ color: "green" }}>
						{props.username}
					</h2>
					<br />
					<h3 className="text-muted">
						{props.firstName} {props.lastName}
					</h3>
					<img
						className="profile-pic mr-3 rounded"
						src="https://i.pinimg.com/564x/9c/60/24/9c60245d48049836aad0c2f83e18bddd.jpg"
						style={{ width: "70%" }}
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
