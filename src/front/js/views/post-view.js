import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/card.js";
import { Context } from "../store/appContext.js";

export const PostView = function(props) {
	const { store, actions } = useContext(Context);

	const params = useParams();

	useEffect(() => {
		actions.getPost(params.id);
	}, []);
	return (
		<div className="container">
			<Card />
		</div>
	);
};
