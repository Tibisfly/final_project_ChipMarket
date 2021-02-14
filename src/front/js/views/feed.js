import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "../components/card.js";
import { Context } from "../store/appContext.js";
import { Profiles } from "../components/profiles";
import { CommercesLists } from "../components/commerces-lists";
import { UploadPost } from "../components/upload-post";
import { SearchZipCode } from "../components/search-zip-code";
import "../../styles/feed.scss";

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
			<>
				<div className="card no-feed text-center oops-msg">
					Oops... Todavía no hay ninguna publicación
					<Link to="/search/zipcode/28028">Consigue las mejores ofertas</Link>
				</div>
			</>
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
				<div className="title-feed">
					Utiliza la barra de búsqueda superior
					<br></br>
					<span className="feed-text-content">para encontrar las ofertas más cercanas</span>
				</div>
			</div>

			<section>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<Profiles
								username={store.user.username}
								firstName={store.user.first_name}
								lastName={store.user.last_name}
							/>
							{/* <SearchZipCode />
						
							<CommercesLists
								url="/commerces"
								title="Mis Comercios"
								commerces={store.user.commerce_list}
								addCommerce="Añade a un Comercio"
							/>
						
							<CommercesLists
								url="/search/zipcode"
								title="Siguiendo a:"
								commerces={store.user.following_list}
								addCommerce="Encuentra y sigue a tus comercios"
							/> */}
						</div>
						<div className="col-lg-12">{cardList}</div>
						<div className="container-fluid">
							<div className="row banner-feed">
								<div className="col-lg-6 col-12 upgrade-img" />
								<div className="col-lg-6 col-12 feed-text-content">
									<div>¿Quieres darte de alta como comercio?</div>
									<Link to="/commerces">Pincha aquí</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
