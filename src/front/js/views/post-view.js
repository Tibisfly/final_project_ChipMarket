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
		<div className="container my-5">
			<Card
				mediaUrl={store.post.mediaUrl}
				businessName={store.post.business_name}
				title={store.post.title}
				description={store.post.description}
				promo_code={store.post.promo_code}
				comments={store.post.comments}
				commerceId={store.post.commerce_id}
				postId={store.post.id}
			/>
		</div>
	);
};
