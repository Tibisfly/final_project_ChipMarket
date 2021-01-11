import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Card } from "../components/card.js";
import { Context } from "../store/appContext.js";

export const Feed = props => {
	const params = useParams();
	console.log(params);
	console.log(props);

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getFeedAsync();
	}, []);

	return (
		<div className="post">
			<Card
				title="vendo pelo quemado"
				description="este pelo viene de una fina pela espectacular"
				media_type=""
				media_url=""
				business_name="PRUEBA"
				expired_at="por ahora un string, pero aqui va la fecha de expiracion"
			/>
			<Card
				title="vendo pelo quemado"
				description="este pelo viene de una fina pela espectacular"
				media_type=""
				media_url=""
				business_name="PRUEBA"
				expired_at="por ahora un string, pero aqui va la fecha de expiracion"
			/>
		</div>
	);
};

// Feed.propTypes = {
// 	children: PropTypes.any,
// 	// title: PropTypes.string,
// 	// active: PropTypes.bool
// };
