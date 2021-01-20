import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/card.js";
import { Context } from "../store/appContext.js";
import { CommercesProfiles } from "../components/commerces-profiles";
import { CommercesLists } from "../components/commerces-lists";
import { UploadPost } from "../components/upload-post";

export const FeedCommerce = () => {
	const params = useParams();

	const { store, actions } = useContext(Context);

	const [modal, setModal] = useState(false);

	useEffect(() => {
		actions.getUserFeed();
		actions.getOneCommerce(params.id);
	}, []);

	let cardList = "";
	if (store.feed.length == 0) {
		cardList = <div className="card text-center ">Oops.. Todavía no hay ninguna publicación</div>;
	} else {
		cardList = store.feed.map((post, index) => {
			return (
				<Card
					key={index}
					img=""
					businessName={post.business_name}
					title={post.title}
					description={post.description}
					promoCode={post.promo_code}
					comments={post.comments}
				/>
			);
		});
	}

	return (
		<div className="post">
			<section>
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<CommercesProfiles
								businessName={store.commerce.business_name}
								firstName={store.user.first_name}
								lastName={store.user.last_name}
							/>

							{/* <CommercesLists title="Mis Comercios" commerce="Prueba" />
							<br />
							<CommercesLists title="Siguiendo a:" commerce="Prueba" /> */}
							<UploadPost />
						</div>
						<div className="col-lg-8">{cardList}</div>
					</div>
				</div>
			</section>
		</div>
	);
};
