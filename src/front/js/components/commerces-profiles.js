import React from "react";
import PropTypes from "prop-types";
// import "../../styles/feed.scss";

export const CommercesProfiles = function(props) {
	return (
		<>
			<div className="container-fluid">
				<div className="profile-users-info">
					<div className="row">
						<div className="col-3">
							<div className="avatar-container">
								<img className="avatar rounded-circle" src="" />
							</div>
						</div>

						<div className="col-7 user-info-feed">
							<div className="business-feed">{props.businessName}</div>
							<div className="info-commerce-feed">
								{props.streetName}, {props.streetNumber}
							</div>

							<div className="info-commerce-feed">
								{props.city} - {props.country}
							</div>

							<div className="info-commerce-feed">{props.zipCode}</div>
							<div className="info-commerce-feed">{props.phoneNumber}</div>
							<div className="info-commerce-feed">{props.website}</div>
						</div>
						<div className="col-2">
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
