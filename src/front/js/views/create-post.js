import React, { useContext, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/forms.scss";
import "../../styles/feed.scss";

export const CreatePost = function(props) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [mediaType, setMediaType] = useState("");
	const [mediaUrl, setMediaUrl] = useState("");

	const history = useHistory();

	const { store, actions } = useContext(Context);

	const params = useParams();

	function handleSubmit() {
		const data = {
			title: title,
			description: description,
			mediaType: mediaType,
			mediaUrl: mediaUrl,
			commerce_id: params.id
		};

		actions.createPost(data, () => {
			history.push(`/feed/commerce/${params.id}`);
		});
	}

	return (
		<>
			<div className="container-fluid ">
				<div className="title-feed">
					<p className="title-feed-text">Hola ChipCommerce, añade una publicación.</p>
				</div>
			</div>
			<div className="container">
				<section className="create-post">
					<h1 className="title">Añade una publicación</h1>
					<br />
					<div className="container">
						<div className="contact-form-row align-items-center">
							<div className="form-field ">
								<label htmlFor="inputTitle">Título de tu publicación</label>
								<br />
								<input
									type="text"
									className="form-control w-100"
									id="inputTitle"
									placeholder="Título de tu publicación"
									value={title}
									onChange={event => setTitle(event.target.value)}
								/>
							</div>
							<br />
							<div className="form-field">
								<label htmlFor="inputDescription">Descripción de tu post</label>
								<textarea
									className="form-control"
									id="inputDescription"
									placeholder="Información del post"
									value={description}
									onChange={event => setDescription(event.target.value)}
								/>
							</div>
							<br />
							<div className="form-field">
								<label htmlFor="inputmediaURL">Introduce la URL de tu imagen</label>
								<input
									type="url"
									pattern="https://.*"
									className="form-control"
									id="inputmediaType"
									placeholder="https://ejemplo.com"
									value={mediaUrl}
									onChange={event => setMediaUrl(event.target.value)}
								/>
							</div>
							<br />
							<div className="form-field">
								<label htmlFor="inputmediaType">Introduce la URL de vídeos.</label>
								<input
									type="url"
									pattern="https://.*"
									className="form-control"
									id="inputmediaType"
									placeholder="https://ejemplo.com"
									value={mediaType}
									onChange={event => setMediaType(event.target.value)}
								/>
							</div>
							<br />
							<div className="form-field">
								<button type="button" className="button-green-register" onClick={handleSubmit}>
									{false ? "Upgrade" : "Crear"}
								</button>
							</div>
							<br />
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
