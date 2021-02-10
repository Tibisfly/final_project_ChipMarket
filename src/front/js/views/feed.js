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
		<div className="container-fluid m-0 p-0 post">
			<div className="background-feed">
				<div className="background-feed-grd">
					<h1 className="title-feed">Encuentra los comercios cerca de ti</h1>
					<p>Aprovecha de los descuentos</p>
				</div>
				<div className="goop goop__SvgWrapper-sc-1g583nk-1 ddrtzv" color="bg.default">
					<svg
						fillRule="evenodd"
						clipRule="evenodd"
						xmlns="http://www.w3.org/2000/svg"
						aria-labelledby="title"
						viewBox="0 0 1920 240"
						id="goop"
						className="goop__InlineSvg-sc-1g583nk-0 cCVJVf">
						<title id="title">goop</title>
						<g>
							<path d="M1920,144.5l0,95.5l-1920,0l0,-65.5c196,-36 452.146,-15.726 657.5,8.5c229.698,27.098 870,57 1262.5,-38.5Z"></path>
						</g>
					</svg>
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
		</div>
	);
};
