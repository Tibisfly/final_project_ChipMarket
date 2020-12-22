import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const Users_feed = function(props) {
	const params = useParams();
	console.log(params);
	console.log(props);
	return (
		<div>
			<h1>Este es el feed de los users</h1>
		</div>
	);
};

Users_feed.propTypes = {
	children: PropTypes.any,
	title: PropTypes.string,
	active: PropTypes.bool
};
