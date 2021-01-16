import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Card } from "../components/card.js";
import { Context } from "../store/appContext.js";

export const Feed = props => {
	const params = useParams();

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getOneUser();
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
				comments={["esto es un array de comentarios", "esto es otro comentario dentro de un aerray"]}
			/>
			{/* {store.feed.map((element, index) => {
                    console.log(element); recuerda que fuera return
                    return (
                        <Card
                            title={element.title}
                            description={element.description}
                            media_type=""
                            media_url=""
                            business_name="PRUEBA"
                            expired_at="por ahora un string, pero aqui va la fecha de expiracion"
                            comments= {element.comments}
                        />
                    );
                })} */}
			<Card
				title="vendo pelo quemado"
				description="este pelo viene de una fina pela espectacular"
				media_type=""
				media_url=""
				business_name="PRUEBA"
				expired_at="por ahora un string, pero aqui va la fecha de expiracion"
				comments={["esto es un array de comentarios", "esto es otro comentario dentro de un aerray"]}
			/>
		</div>
	);
};

// Feed.propTypes = {
// 	children: PropTypes.any,
// 	// title: PropTypes.string,
// 	// active: PropTypes.bool
// };
