import React, { useContext, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { UpButton } from "./up-button.js";
import { ListOfComments } from "./list-of-comments.js";
import { Context } from "../store/appContext.js";
import "../../styles/cards.scss";

export function Card(props) {
	const params = useParams();

	const { store, actions } = useContext(Context);

	const history = useHistory();

	const [newComment, setNewComment] = useState([""]);
	const [modal, setModal] = useState(false);

	const [comment, setComment] = useState(["Que ofertaza!!", "Guao, me parece genial, mañana voy a buscar mi oferta"]);
	const [inputValue, setInputValue] = useState("");

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
					<div className="profile-picture">
						<img
							className="img-profile-picture rounded-circle mr-3 mt-2"
							src="https://i.pinimg.com/236x/59/54/6c/59546c2cf201e676b1c7b9f98df7a63b.jpg"
						/>
					</div>

					<Link to={`/feed/commerce/${props.commerceId}`} className="text-dark text-decoration-none">
						<h6 className="font-weight-bold align-self-center mt-3">{props.businessName}</h6>
					</Link>
				</div>
			</div>

			<Link to={`/post/${props.postId}`}>
				<img src={props.mediaUrl} className="img-fluid" />
			</Link>

			<div className="card-body">
				<div className="d-flex">
					<div className="flex-grow-1">
						<i className="far fa-bookmark lead mr-3 mb-3">
							<span className="promo-code-text">Código promocional: {props.promo_code}</span>
						</i>
						<br />
					</div>
				</div>

				<h6 className="post-info title font-weight-bold">{props.title}</h6>
				<p className="post-info description mb-0 my-3">{props.description}</p>

				<ListOfComments
					comments={comment.map((value, index) => (
						<li className="list-group-item" key={index}>
							{value}
						</li>
					))}
				/>
				<div className="d-flex border-0 py-3 px-2">
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
						className="btn btn-link font-weight-bold text-decoration-none text-success">
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
	postId: PropTypes.int,
	commerceId: PropTypes.int
};
