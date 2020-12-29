import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Card from "../components/card.js";

export const Feed = function(props) {
	const params = useParams();
	console.log(params);
	console.log(props);

	return (
		<div className="post">
			<Card />
		</div>
	);
};

Feed.propTypes = {
	children: PropTypes.any,
	title: PropTypes.string,
	active: PropTypes.bool
};
