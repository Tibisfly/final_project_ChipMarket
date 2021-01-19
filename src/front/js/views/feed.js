import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/card.js";
import { Context } from "../store/appContext.js";
import { Profiles } from "../components/profiles";
import { Following } from "../components/following";
import { UploadPost } from "../components/upload-post";
import { SearchZipCode } from "../components/search-zip-code";

export const Feed = () => {
	const params = useParams();

	const { store, actions } = useContext(Context);

	const [modal, setModal] = useState(false);

	useEffect(() => {
		actions.getUserFeed();
		actions.getOneUser();
	}, []);

	const cardList = store.feed.map((post, index) => {
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

	return (
		<div className="post">
			{/* <p className="text-center">¡Welcome Back ChipAddict!</p>
			<p className="text-center">
				No olvides mostrar el código promocional cuando realices el canje de la ChipOferta. Coméntanos que tal
				los comercios de tu barrio.
			</p> */}
			<section>
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<Profiles
								username={store.user.username}
								firstName={store.user.first_name}
								lastName={store.user.last_name}
							/>
							<Following />
							<SearchZipCode />
							<UploadPost />
						</div>
						<div className="col-lg-8">{cardList}</div>
					</div>
				</div>
			</section>
		</div>
	);
};
