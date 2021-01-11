import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Card from "../components/card.js";
import { Context } from "../store/appContext.js";

export const Feed = function(props) {
	const params = useParams();
	console.log(params);
	console.log(props);

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getFeedAsync();
	}, []);

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
