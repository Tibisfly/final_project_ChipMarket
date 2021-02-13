import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/card.js";
import { Context } from "../store/appContext.js";
import { Profiles } from "../components/profiles";
import { CommercesLists } from "../components/commerces-lists";
import { UploadPost } from "../components/upload-post";
import { SearchZipCode } from "../components/search-zip-code";
import "../../styles/home.scss";

export const Feed = () => {
	const params = useParams();

	const { store, actions } = useContext(Context);

	const [modal, setModal] = useState(false);

	useEffect(() => {
		actions.getUserFeed();
		actions.getOneUser();
	}, []);

	let cardList = "";
	if (store.feed.length == 0) {
		cardList = (
			<div className="card no-feed text-center">Oops.. Todavía no hay ninguna publicación</div>
			// este div quisiera centrarlo en todo el div de las columnas del feed para las cards y darle estilos.
		);
	} else {
		cardList = store.feed.map((post, index) => {
			return (
				<Card
					key={index}
					img=""
					businessName={post.business_name}
					title={post.title}
					description={post.description}
					promo_code={post.promo_code}
					comments={post.comments}
					commerceId={post.commerce_id}
					postId={post.id}
				/>
			);
		});
	}

	return (
		<>
			<div className="container-fluid ">
				<div className="row banner-feed">
					<div className="col-lg-6 col-md-6 col-12 title-feed-container">
						<div className="message-content">
							<div className="title-feed">Ahorra tiempo y dinero</div>
							<div className="message-banner">
								<p className="feed-text-content">Mientras apoyas al comercio local.</p>
								<p>Únete a nuestra comunidad y descubre ofertas únicas cerca de ti.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-12 background-feed-img"></div>
				</div>
			</div>

			<section>
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<Profiles
								username={store.user.username}
								firstName={store.user.first_name}
								lastName={store.user.last_name}
							/>
							<SearchZipCode />
							<br />
							<CommercesLists
								url="/commerces"
								title="Mis Comercios"
								commerces={store.user.commerce_list}
								addCommerce="Añade a un Comercio"
							/>
							<br />
							<CommercesLists
								url="/search/zipcode"
								title="Siguiendo a:"
								commerces={store.user.following_list}
								addCommerce="Encuentra y sigue a tus comercios"
							/>
						</div>
						<div className="col-lg-8">{cardList}</div>
					</div>
				</div>
			</section>
		</>
	);
};
