import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UpButton } from "./upbutton.js";
import { Context } from "../store/appContext.js";

export function Card(props) {
	const { store, actions } = useContext(Context);

	let imgRandom = Math.floor(Math.random() * 1000 + 1);
	let pathImg = "https://picsum.photos/400/200?random=" + imgRandom;

	return (
		<div className="container">
			<div className="card">
				<img src={pathImg} className="card-img-top" alt="..." />
				<div className="card-body">
					<UpButton />

					<div className="row justify-content-between" />
				</div>
			</div>
		</div>
	);
}
