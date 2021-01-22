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

	const [comment, setComment] = useState(["Primer comentario", "Segundo comentario"]);
	const [inputValue, setInputValue] = useState("");

	let imgRandom = Math.floor(Math.random() * 1000 + 1);
	let pathImg = "https://picsum.photos/800/600?random=1" + imgRandom;

	function handleChange(event) {
		setInputValue(event.target.value);
	}

	const handleKeyPress = event => {
		if (event.key === "Enter" && inputValue != "") {
			setComment([...comment, inputValue]);

			setInputValue("");
		}
	};

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

					<Link
						to={`/feed/commerce/${props.commerceId}`}
						className="text-dark text-decoration-none font-weight-bold align-self-center">
						{props.businessName}
					</Link>
				</div>
				<div className="follow align-self-center">
					<Link
						to="/feed"
						type="button"
						className="nav-link active font-weight-bold text-decoration-none"
						aria-current="page"
						href="/feed"
						style={{ color: "green" }}>
						Seguir
					</Link>
				</div>
				<div className="ml-auto p-2"></div>
			</div>
			<p className="ml-5 mb-1">Publicado hace 8 horas</p>
			<Link to={`/post/${props.postId}`}>
				<img src={pathImg} className="img-fluid" />
			</Link>

			<div className="card-body">
				<div className="d-flex">
					<div className="flex-grow-1">
						<i className="far fa-bookmark lead mr-3 mb-3"> Código promocional: {props.promo_code}</i>
						<br />
						{/* <i className="far fa-heart lead mr-3"> 259 ChipLikes</i> */}
					</div>
				</div>

				<p className="title">{props.title}</p>

				<p className="mb-0 my-3">{props.description}</p>

				<ListOfComments
					comments={comment.map((value, index) => (
						<li className="list-group-item" key={index}>
							{value}
						</li>
					))}
				/>
				<div className="d-flex border-top py-3 px-2">
					<input
						type="text"
						placeholder="Agrega un comentario..."
						className="form-control border-0"
						onChange={handleChange}
						onKeyPress={handleKeyPress}
						value={inputValue}></input>
					<button
						onClick={handleKeyPress}
						type="submit"
						className="btn btn-link font-weight-bold text-decoration-none"
						style={{ color: "green" }}>
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
	promo_code: PropTypes.string,
	comments: PropTypes.array,
	commerceId: PropTypes.int,
	postId: PropTypes.int,
	comments: PropTypes.array
};
