import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/card.js";
import { Context } from "../store/appContext.js";
import { CommercesProfiles } from "../components/commerces-profiles";
import { CommercesLists } from "../components/commerces-lists";
import { UploadPost } from "../components/upload-post";
import PropTypes from "prop-types";

export const FeedCommerce = () => {
	const params = useParams();

	const { store, actions } = useContext(Context);

	const [modal, setModal] = useState(false);

	useEffect(() => {
		actions.getCommerceFeed(params.id);
		actions.getOneCommerce(params.id);
	}, []);

	let cardList = "";
	if (store.feed.length == 0) {
		cardList = (
			<div className="card text-center" style={{ backgroundColor: "#fcf8f2" }}>
				Oops.. Todavía no hay ninguna publicación
			</div>
		);
	} else {
		cardList = store.feed.map((post, index) => {
			return (
				<div className="col-4" key={index}>
					<Card
						img=""
						businessName={post.business_name}
						commerceId={post.commerce_id}
						title={post.title}
						description={post.description}
						promo_code={post.promo_code}
						comments={post.comments}
						postId={post.id}
					/>
				</div>
			);
		});
	}

	return (
		<div className="post">
			<section>
				<div className="container">
					<div className="row">
						<div className="col-lg-9">
							<CommercesProfiles
								businessName={store.commerce.business_name}
								streetName={store.commerce.street_name}
								streetNumber={store.commerce.street_number}
								zipCode={store.commerce.zip_code}
								city={store.commerce.city}
								country={store.commerce.city}
								phoneNumber={store.commerce.phone_number}
								website={store.commerce.website}
							/>
						</div>
						<div className="col-lg-3">
							<UploadPost />
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container-fluid my-5">
					<div className="row">{cardList}</div>
				</div>
			</section>
		</div>
	);
};
