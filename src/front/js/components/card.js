import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { UpButton } from "./up-button.js";
import { Context } from "../store/appContext.js";

export function Card(props) {
	const { store, actions } = useContext(Context);
	const [newComment, setNewComment] = useState([""]);

	let imgRandom = Math.floor(Math.random() * 1000 + 1);
	let pathImg = "https://picsum.photos/400/200?random=" + imgRandom;

	console.log("primer console.log", props.comments);
	const comments = props.comments.map((comment, index) => {
		console.log("esto es un solo comentarios", comment);
		return (
			<li className="list-group-item" key={index}>
				{comment}
			</li>
		);
	});
	return (
		<div className="container">
			<div className="card-body">
				<h5 className="card-title">{props.business_name}</h5>
				<h6 className="card-subtitle mb-2 text-muted">Fecha de creación de post</h6>
				<img src={pathImg} className="card-img-top" alt="..." />
				<div className="card-body">
					<h6 className="card-subtitle mb-2 text-muted">{props.title}</h6>
					<span className="card-text">{props.expired_at}</span>
					<p className="card-text">{props.description}</p>
					<div className="card-comments-post">
						<ul className="list-group list-group-flush">{comments}</ul>
					</div>
					<div className="form-group">
						<label htmlFor="comments">Comentarios:</label>
						<textarea
							className="form-control"
							id="comments"
							rows="3"
							value={newComment}
							onChange={event => setNewComment(event.target.value)}></textarea>
						<button type="button" className="btn btn-primary">
							Añadir, onClick y hacer la funcion de flux con console.log por ahora.
						</button>
					</div>
					{/* <div className="row justify-content-between" /> */}
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	media_type: PropTypes.string,
	media_url: PropTypes.string,
	business_name: PropTypes.string,
	expired_at: PropTypes.string,
	comments: PropTypes.array
};
