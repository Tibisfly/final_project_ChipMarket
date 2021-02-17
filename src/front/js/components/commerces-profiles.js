import React, { useContext, useState, useEffect } from "react";
import { Tab, Tabs } from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import classnames from "classnames";
import { CommercesLists } from "./commerces-lists.js";
// import "../../styles/feed.scss";

export const CommercesProfiles = function(props) {
	useEffect(() => {
		actions.getOneUser();
	}, []);

	const [activeTab, setActiveTab] = useState("1");

	const toggle = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	const { store, actions } = useContext(Context);

	const [dropdownOpen1, setDropdownOpen2] = useState(false);

	let handleButton = "";
	if (store.commerce.owner_id == store.user.id) {
		handleButton = (
			<Link to="/create/post" type="button">
				<button className="follow-button btn btn-secondary">Añade una publicación</button>
			</Link>
		);
	} else {
		const isFollow = store.user.following_list.filter(({ commerce_id }) => commerce_id == store.commerce.id);
		if (isFollow != null && isFollow.length > 0) {
			handleButton = (
				<button className="follow-success btn btn-secondary" onClick={() => handleSubmitUnfollow()}>
					Siguiendo
				</button>
			);
		} else {
			handleButton = (
				<button className="add-post-button btn btn-secondary" onClick={() => handleSubmit()}>
					Seguir
				</button>
			);
		}
	}

	function handleSubmit() {
		const data = {
			user_id: store.user.id,
			commerce_id: store.commerce.id
		};

		actions.followCommerce(data, () => {
			if (store.error == null) {
				handleButton = (
					<button className="follow-success btn btn-secondary" onClick={() => handleSubmitUnfollow()}>
						Siguiendo
					</button>
				);
			}
		});
	}

	function handleSubmitUnfollow() {
		const data = {
			user_id: store.user.id,
			commerce_id: store.commerce.id
		};

		actions.deleteFollowCommerce(data, () => {
			if (store.error == null) {
				handleButton = (
					<button className="add-post-button btn btn-secondary" onClick={() => handleSubmit()}>
						Seguir
					</button>
				);
			}
		});
	}

	return (
		<>
			<nav>
				<div className="nav nav-tabs" id="nav-tab" role="tablist">
					<button
						className={classnames("nav-link", { active: activeTab === "1" })}
						onClick={() => {
							toggle("1");
						}}
						id="nav-perfil-tab"
						type="button"
						role="tab">
						Perfil
					</button>
					<button
						className={classnames("nav-link", { active: activeTab === "2" })}
						onClick={() => {
							toggle("2");
						}}
						id="nav-info-commerce-tab"
						type="button"
						role="tab">
						Descripción del comercio
					</button>

					<div className="buttons-actions">{handleButton}</div>
				</div>
			</nav>
			<div className="tab-content" id="nav-tabContent">
				<div
					id="nav-home"
					role="tabpanel"
					className={classnames("tab-pane fade", {
						show: activeTab === "1",
						active: activeTab === "1"
					})}
					aria-labelledby="nav-perfil-tab">
					<div className="container-fluid">
						<div className="profile-users-info">
							<div className="row">
								<div className="col-lg-12 user-info-feed">
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
							</div>
						</div>
					</div>
				</div>
				<div
					className={classnames("tab-pane fade", {
						show: activeTab === "2",
						active: activeTab === "2"
					})}
					id="nav-info-commerce"
					role="tabpanel"
					aria-labelledby="nav-info-commerce-tab">
					<div className="commerce-description">{props.description}</div>
					<a target={"_blank"} rel="noreferrer" href={`${props.website}`} className="website-link">
						{props.website}
					</a>
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
	website: PropTypes.string,
	description: PropTypes.string
};
