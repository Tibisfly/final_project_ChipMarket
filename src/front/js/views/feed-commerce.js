import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "../components/card.js";
import { Context } from "../store/appContext.js";
import { CommercesProfiles } from "../components/commerces-profiles";
import { CommercesLists } from "../components/commerces-lists";
import { UploadPost } from "../components/upload-post";
import PropTypes from "prop-types";
import "../../styles/feed.scss";

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
			<div className="card no-feed text-center oops-msg">
				Oops.. Todavía no hay ninguna publicación<Link to="/create/post">Añade una publicación</Link>
			</div>
		);
	} else {
		cardList = store.feed.map((post, index) => {
			return (
				<div className="col-12" key={index}>
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
		<>
			<div className="container-fluid ">
				<div className="title-feed-commerce">
					Eres nuestra inspiración - Añade publicaciones diarias - Haz tu marca atractiva
					<Link to="/contact-us">Posiciona tu negocio en la búsqueda</Link>
				</div>
			</div>

			<section>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
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
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<div className="row">{cardList}</div>
				</div>
			</section>
		</>
	);
};
