import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "../components/card.js";
import { Context } from "../store/appContext.js";
import { Profiles } from "../components/profiles";
import { CommercesLists } from "../components/commerces-lists";
import { UploadPost } from "../components/upload-post";
import { SearchZipCode } from "../components/search-zip-code";
import LogoBlue from "../../img/logo-blue2.png";
import Profile from "../../img/profile.png";
import "../../styles/feed.scss";
import "../../styles/navbar.scss";

export const Feed = () => {
	const params = useParams();

	const { store, actions } = useContext(Context);

	const [modal, setModal] = useState(false);

	useEffect(() => {
		actions.getOneUser();
		actions.getUserFeed();
	}, []);

	let cardList = "";
	if (store.feed.length == 0) {
		cardList = (
			<>
				<div className="no-feed text-center oops-msg">
					Oops... Todavía no sigues a ningún comercio.
					<form className="d-flex form-search-navbar">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Introduce tu código postal"
							aria-label="Search"></input>
						<button className="btn search-button" type="submit">
							<Link to="/search/zipcode/28028" className="text-decoration-none">
								Buscar
							</Link>
						</button>
					</form>
				</div>
			</>
		);
	} else {
		cardList = store.feed.map((post, index) => {
			return (
				<Card
					key={index}
					mediaUrl={post.media_url}
					businessName={post.business_name}
					title={post.title}
					description={post.description}
					promo_code={post.promo_code}
					comments={post.comments}
					// commerceId={post.commerce_id}
					postId={post.id}
				/>
			);
		});
	}

	return (
		<>
			<div className="container-fluid ">
				<div className="title-feed">
					<img src={LogoBlue} />
					<p className="title-feed-text">
						Utiliza la barra de búsqueda superior para encontrar las ofertas más cercanas
					</p>
				</div>
			</div>

			<section>
				<div className="container">
					<div className="row  m-0 justify-content-lg-center">
						<div className="col-lg-3">
							<div className="avatar-container">
								<img className="avatar-user rounded-circle" src={Profile} />
							</div>
						</div>
						<div className="col-lg-9">
							<Profiles
								username={store.user.username}
								firstName={store.user.first_name}
								lastName={store.user.last_name}
								myCommerces={store.myCommerces}
								follows={store.follows}
							/>
						</div>
						<div className="col-lg-10">{cardList}</div>
					</div>
				</div>

				<div className="container-fluid banner-feed">
					<div className="container">
						<div className="row ">
							<div className="col-lg-6 col-12 upgrade-img" />
							<div className="col-lg-6 col-12 feed-text-content">
								<div>¿Quieres darte de alta como comercio?</div>
								<Link to="/commerces">Pincha aquí</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
