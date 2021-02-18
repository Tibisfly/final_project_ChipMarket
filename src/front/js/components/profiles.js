import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "reactstrap";
import { Context } from "../store/appContext";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import classnames from "classnames";
import { CommercesLists } from "./commerces-lists.js";
import "../../styles/feed.scss";

export const Profiles = function(props) {
	const [activeTab, setActiveTab] = useState("1");

	const toggle = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	const { store, actions } = useContext(Context);

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
						id="nav-commerce-following-tab"
						type="button"
						role="tab">
						Comercios seguidos
					</button>
					<button
						id="nav-my-commerces-tab"
						className={classnames("nav-link", { active: activeTab === "3" })}
						onClick={() => {
							toggle("3");
						}}
						type="button"
						role="tab">
						Mis ChipCommerce
					</button>
				</div>
			</nav>

			<div className="tab-content" id="nav-tabContent">
				<div
					className={classnames("tab-pane fade", {
						show: activeTab === "1",
						active: activeTab === "1"
					})}
					id="nav-home"
					role="tabpanel"
					aria-labelledby="nav-perfil-tab">
					<div className="container-fluid">
						<div className="profile-users-info">
							<div className="row">
								<div className="col-12 user-info-feed">
									<div>
										<div className="nickname-feed">{props.username}</div>

										<div className="username-feed">
											{props.firstName} {props.lastName}
										</div>
									</div>
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
					id="nav-profile"
					role="tabpanel"
					aria-labelledby="nav-commerce-following-tab">
					<div className="following-user-profile">
						<CommercesLists title="Siguiendo a:" commerces={store.follows} />
					</div>
				</div>
				<div
					className={classnames("tab-pane fade", {
						show: activeTab === "3",
						active: activeTab === "3"
					})}
					id="nav-profile"
					role="tabpanel"
					aria-labelledby="nav-my-commerces-tab">
					<div>
						<CommercesLists title="Mis Comercios dados de alta:" commerces={store.myCommerces} />
					</div>
				</div>
			</div>
		</>
	);
};

Profiles.propTypes = {
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	username: PropTypes.string,
	myCommerces: PropTypes.array,
	follows: PropTypes.array
};
