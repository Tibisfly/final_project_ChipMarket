import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "../components/card.js";
import { Context } from "../store/appContext.js";
import { CommercesProfiles } from "../components/commerces-profiles";
import { CommercesLists } from "../components/commerces-lists";
import { UploadPost } from "../components/upload-post";
import PropTypes from "prop-types";
import "../../styles/feed.scss";
import "../../styles/navbar.scss";

export const FeedCommerce = () => {
	const params = useParams();

	const { store, actions } = useContext(Context);

	const [modal, setModal] = useState(false);

	useEffect(() => {
		actions.getCommerceFeed(params.id);
		actions.getOneCommerce(params.id);
		actions.getOneUser();
	}, []);

	let cardList = "";
	if (store.feed.length == 0) {
		cardList = (
			<div className="card no-feed text-center oops-msg">
				Oops.. Todavía no hay ninguna publicación
				<Link to={`/create/post/${params.id}`}>Añade una publicación</Link>
			</div>
		);
	} else {
		cardList = store.feed.map((post, index) => {
			return (
				<div className="col-10" key={index}>
					<Card
						mediaUrl={post.media_url}
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
		<>
			<section>
				<div className="container feed-commerce-container">
					<div className="row row-profile-header">
						<div className="col-lg-3">
							<div className="avatar-container">
								<img
									className="avatar rounded-circle"
									src="https://blush.design/api/download?shareUri=WO3OGL4xv&c=Hair_0%7Ea55728_Skin_0%7Eeac7a8_Top_0%7Ee6985f&w=800&h=800&fm=png"
								/>
							</div>
						</div>
						<div className="col-lg-9 col-12">
							<CommercesProfiles
								businessName={store.commerce.business_name}
								streetName={store.commerce.street_name}
								streetNumber={store.commerce.street_number}
								zipCode={store.commerce.zip_code}
								city={store.commerce.city}
								country={store.commerce.city}
								phoneNumber={store.commerce.phone_number}
								website={store.commerce.website}
								description={store.commerce.description}
							/>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<div className="row justify-content-center">{cardList}</div>
				</div>
			</section>
		</>
	);
};
