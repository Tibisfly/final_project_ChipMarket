import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { UpButton } from "./up-button.js";
import { ListOfComments } from "./list-of-comments.js";
import { Context } from "../store/appContext.js";

export function Card(props) {
	const { store, actions } = useContext(Context);
	const [newComment, setNewComment] = useState([""]);
	const [modal, setModal] = useState(false);

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
					<div className="profile-picture rounded-circle">
						<img
							style={{ width: "3rem", height: "3rem" }}
							className="rounded-circle mr-3"
							src="https://i.pinimg.com/236x/59/54/6c/59546c2cf201e676b1c7b9f98df7a63b.jpg"
						/>
					</div>

					<a href="" className="text-dark text-decoration-none font-weight-bold align-self-center">
						{props.businessName}
					</a>
				</div>
				<div className="follow align-self-center">
					<i className="fas fa-ellipsis-h"></i>
				</div>
			</div>
			<p className="ml-5 mb-1">Publicado hace 8 horas</p>
			<img src={pathImg} className="img-fluid" />
			<div className="card-body">
				<div className="d-flex">
					<div className="flex-grow-1">
						<i className="far fa-bookmark lead mr-3 font-weight-bold" />
						<small>Código promocional: {props.promoCode}</small>
						{/* <i className="far fa-heart lead mr-3"></i>
						<i className="far fa-comment lead mr-3"></i>
						<i className="far fa-paper-plane lead mr-3"></i> */}
					</div>
					<div></div>
				</div>
				{/* <p className="font-weight-bold">259 ChipLikes</p> */}
				<p className="title">{props.title}</p>
				<p className="mb-0">{props.description}</p>

				<ListOfComments />
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
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	mediaType: PropTypes.string,
	mediaUrl: PropTypes.string,
	businessName: PropTypes.string,
	promoCode: PropTypes.string,
	comments: PropTypes.array
};
