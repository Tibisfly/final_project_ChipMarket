import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { CommercesLists } from "./commerces-lists.js";

export const Profiles = function(props) {
	const [dropdownOpen1, setDropdownOpen1] = useState(false);

	const toggle1 = () => setDropdownOpen1(prevState => !prevState);

	const { store, actions } = useContext(Context);

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
						<div className="col-6 user-info-feed">
							<div>
								<div className="nickname-feed">{props.username}</div>

								<div className="username-feed">
									{props.firstName} {props.lastName}
								</div>
							</div>
						</div>
						<div className="col-3">
							<Dropdown className="dropdown-principal" isOpen={dropdownOpen1} toggle={toggle1}>
								<DropdownToggle caret>¿Eres un usuario?</DropdownToggle>
								<DropdownMenu>
									<DropdownItem>
										<CommercesLists title="Mis Comercios" commerces={store.user.commerce_list} />
									</DropdownItem>
									<DropdownItem>
										<CommercesLists title="Siguiendo a:" commerces={store.user.following_list} />
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
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
