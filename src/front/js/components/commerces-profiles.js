import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { CommercesLists } from "./commerces-lists.js";
// import "../../styles/feed.scss";

export const CommercesProfiles = function(props) {
	const { store, actions } = useContext(Context);

	const [dropdownOpen1, setDropdownOpen2] = useState(false);

	const toggle1 = () => setDropdownOpen1(prevState => !prevState);

	return (
		<>
			<div className="container-fluid">
				<div className="profile-users-info">
					<div className="row">
						<div className="col-3">
							<div className="avatar-container">
								<img
									className="avatar rounded-circle"
									src="https://www.ferrokey.eu/media/wysiwyg/45_1.jpg"
								/>
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
							<Link to="/create/post" type="button">
								Añade una publicación
							</Link>
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
