import React from "react";
import PropTypes from "prop-types";

export const Profiles = function(props) {
	return (
		<>
			<div className="d-flex mb-4">
				<div>
					<img
						className="profile-pic rounded-circle mr-3"
						src="https://i.pinimg.com/236x/34/dd/f2/34ddf290ab42740d1ff1673cf5796f72.jpg"
					/>
					<p className="d-block font-weight-bold mb-0 mt-4">{props.username}</p>
					<small className="text-muted">
						{props.firstName} {props.lastName}
					</small>
				</div>
			</div>
		</>
		// <div className="container-fluid p-4 d-flex">
		// 	<img
		// 		id="profile-picture"
		// 		src="https://images.unsplash.com/photo-1610642433478-630fab962814?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
		// 		alt="..."
		// 	/>
		// 	<div className="mx-5">
		// 		<h1 className="fw-bold">Perfil de ChipAddict:</h1>
		// 		<h3 className="fw-bolder">Username:</h3>
		// 	</div>
		// </div>
	);
};

Profiles.propTypes = {
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	username: PropTypes.string
};
