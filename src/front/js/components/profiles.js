import React from "react";
import PropTypes from "prop-types";

export const Profiles = function(props) {
	return (
		<>
			<div className="container-fluid">
				<div className="profile-users-info">
					<div className="row">
						<div className="col-3">
							<div className="avatar-container">
								<img
									className="avatar rounded-circle"
									src="https://i.pinimg.com/564x/9c/60/24/9c60245d48049836aad0c2f83e18bddd.jpg"
								/>
							</div>
						</div>
						<div className="col-5 user-info-feed">
							<div>
								<div className="nickname-feed">{props.username}</div>

								<div className="username-feed">
									{props.firstName} {props.lastName}
								</div>
							</div>
						</div>
						<div className="col-3">
							<div className="dropdown">
								<button
									className="btn btn-primary dropdown-toggle"
									type="button"
									data-toggle="dropdown">
									Dropdown Example
									<span className="caret"></span>
								</button>
								<ul className="dropdown-menu">
									<li>
										<a href="#">HTML</a>
									</li>
									<li>
										<a href="#">CSS</a>
									</li>
									<li>
										<a href="#">JavaScript</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
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
