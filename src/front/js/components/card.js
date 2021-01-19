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

	// const comments = props.comments.map((comment, index) => {
	// 	return (
	// 		<li className="list-group-item" key={index}>
	// 			{comment}
	// 		</li>
	// 	);
	// });
	return (
		<div className="card mb-5">
			<div className="card-body d-flex">
				<div className="d-flex flex-grow-1">
					<div className="profile-picture rounded-circle mr-3" />
					<a href="" className="text-dark text-decoration-none font-weight-bold align-self-center">
						{props.business_name}
					</a>
				</div>
				<div className="follow align-self-center">
					<i className="fas fa-ellipsis-h"></i>
				</div>
			</div>
			<small className="ml-5 mb-1">Publicado hace 8 horas</small>
			<img src={pathImg} className="img-fluid" />
			<div className="card-body">
				<div className="d-flex">
					<div className="flex-grow-1">
						<i className="far fa-heart lead mr-3"></i>
						<i className="far fa-comment lead mr-3"></i>
						<i className="far fa-paper-plane lead mr-3"></i>
					</div>
					<div></div>
				</div>
				<p className="font-weight-bold">259 ChipLikes</p>
				<p className="title">{props.title}</p>
				<p className="mb-0">{props.description}</p>
				<i className="far fa-bookmark lead mr-3 font-weight-bold" />
				<small>Código promocional: {props.expired_at}</small>
				<ul className="list-group m-1 list-group-flush">
					{props.comments}
					<li className="list-group-item"></li>
					<li className="list-group-item"></li>
					<li className="list-group-item"></li>
				</ul>
			</div>
			<div className="d-flex border-top py-3 px-2">
				<input
					type="text"
					placeholder="Agrega un comentario..."
					className="form-control border-0"
					// value={newComment}
					// onChange={event => setNewComment(event.target.value)}>
				></input>
				<button type="submit" className="btn btn-link font-weight-bold text-decoration-none">
					Publicar
				</button>
			</div>
		</div>

		// <div className="container">
		// 	<div className="card-body">
		// 		<h5 className="card-title">{props.business_name}</h5>
		// 		<h6 className="card-subtitle mb-2 text-muted">Fecha de creación de post</h6>
		// 		<img src={pathImg} className="card-img-top" alt="..." />
		// 		<div className="card-body">
		// 			<h6 className="card-subtitle mb-2 text-muted">{props.title}</h6>
		// 			<span className="card-text">{props.expired_at}</span>
		// 			<p className="card-text">{props.description}</p>
		// 			<div className="card-comments-post">
		// 				<ul className="list-group list-group-flush">{comments}</ul>
		// 			</div>
		// 			<div className="form-group">
		// 				<label htmlFor="comments">Comentarios:</label>
		// 				<textarea
		// 					className="form-control"
		// 					id="comments"
		// 					rows="3"
		// 					value={newComment}
		// 					onChange={event => setNewComment(event.target.value)}></textarea>
		// 				<button type="button" className="btn btn-primary">
		// 					Añadir, onClick y hacer la funcion de flux con console.log por ahora.
		// 				</button>
		// 			</div>
		// 			{/* <div className="row justify-content-between" /> */}
		// 		</div>
		// 	</div>
		// </div>
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
