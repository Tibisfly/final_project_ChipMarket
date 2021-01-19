import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Card } from "../components/card.js";
import { Context } from "../store/appContext.js";
import { ModalUpload } from "../components/modal-upload";

export const Feed = props => {
	const params = useParams();

	const { store, actions } = useContext(Context);

	const [modal, setModal] = useState(false);

	// useEffect(() => {
	// 	actions.getOneUser();
	// }, []);

	return (
		<div className="post">
			<p className="text-center">¡Welcome Back ChipAddict!</p>
			<p className="text-center">
				No olvides mostrar el código promocional cuando realices el canje de la ChipOferta. Coméntanos que tal
				los comercios de tu barrio.
			</p>
			<section>
				<div className="container my-5">
					<div className="row">
						<div className="col-lg-8">
							<Card
								title="Esto es un titulo"
								description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially u"
								media_type=""
								media_url=""
								business_name="Negocio 1"
								expired_at="por ahora un string, pero aqui va la fecha de expiracion"
								comments={props.comments}
							/>
							<Card
								title="Esto es un titulo"
								description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially u"
								media_type=""
								media_url=""
								business_name="Negocio 1"
								expired_at="por ahora un string, pero aqui va la fecha de expiracion"
								comments={props.comments}
							/>
							<Card
								title="Esto es un titulo"
								description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially u"
								media_type=""
								media_url=""
								business_name="Negocio 1"
								expired_at="por ahora un string, pero aqui va la fecha de expiracion"
								comments={props.comments}
							/>
						</div>

						<div className="col-lg-4">
							<div className="d-flex mb-4">
								<div>
									<img
										className="profile-pic rounded-circle mr-3"
										src="https://i.pinimg.com/236x/34/dd/f2/34ddf290ab42740d1ff1673cf5796f72.jpg"
									/>
									<p className="d-block font-weight-bold mb-0 mt-4">Username</p>
									<small className="text-muted">Nombre y Apellido</small>
								</div>
							</div>
							<div className="card">
								<div className="card-body">
									<div>
										<p className="font-weight-bold text-muted">Tus comercios</p>
									</div>
									<div className="commerces-container">
										<div className="d-flex mb-4">
											<small className="font-weight-bold">
												<a href="" className="text-decoration-none text-dark">
													Fruteria La Pili
												</a>
											</small>
										</div>
										<div className="d-flex mb-4">
											<small className="font-weight-bold">
												<a href="" className="text-decoration-none text-dark">
													Panaderia La Chama
												</a>
											</small>
										</div>
										<div className="d-flex mb-4">
											<small className="font-weight-bold">
												<a href="" className="text-decoration-none text-dark">
													Lavanderia low cost
												</a>
											</small>
										</div>
										<div className="d-flex mb-4">
											<small className="font-weight-bold">
												<a href="" className="text-decoration-none text-dark">
													Pescaderia Manolo
												</a>
											</small>
										</div>
										<div className="d-flex mb-4">
											<small className="font-weight-bold">
												<a href="" className="text-decoration-none text-dark">
													Peluqueria Ramona
												</a>
											</small>
										</div>
										<div className="d-flex mb-4">
											<small className="font-weight-bold">
												<a href="" className="text-decoration-none text-dark">
													Quesera La Chiqui
												</a>
											</small>
										</div>
									</div>
								</div>
							</div>
							<div className="card mt-5">
								<div className="card-body">
									<div>
										<p className="font-weight-bold text-muted mb-0">
											Encuentra las mejores ofertas
										</p>
										<small className="font-weight-bold text-muted mb-3">Introduce tu ZipCode</small>
									</div>
									<div className="d-grid gap-2 d-md-block">
										<input
											className="form-control input-group input-group-sm mb-3"
											type="search"
											placeholder="Search"
											aria-label="Search"
										/>
										<button className="btn btn-outline-success btn-sm" type="submit">
											Search
										</button>
									</div>
								</div>
							</div>
							<div className="card mt-5">
								<div className="card-body">
									<div>
										<p className="font-weight-bold text-muted">Sube una foto</p>
										<button
											type="button"
											className="btn btn-link-light"
											onClick={() => setModal(true)}>
											<i className="fas fa-plus">Añade una publicación</i>
										</button>
										<ModalUpload show={modal} onClose={() => setModal(false)} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

Feed.propTypes = {
	children: PropTypes.any,
	title: PropTypes.string,
	active: PropTypes.bool,
	description: PropTypes.string,
	comments: PropTypes.string
};
