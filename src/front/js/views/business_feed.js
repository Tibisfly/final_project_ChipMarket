import React from "react";

export const Business_feed = function(props) {
	return (
		<div>
			<h1>Este es el feed de los Comercios</h1>
		</div>
	);
};

Users_feed.propTypes = {
	children: PropTypes.any,
	title: PropTypes.string,
	active: PropTypes.bool
};
