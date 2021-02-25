import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import { Register } from "./register.js";
import MapTest from "../components/map-view.js";
import Hands from "../../img/Hands.png";
import "../../styles/home.scss";

export const SearchZipCode = function(props) {
	return (
		<>
			<div className="container">
				<div className="mapa-principal-msg">
					Según tu localización encontrarás comercios cercanos con ofertas únicas para ChipAddicts.
				</div>
			</div>
			<div className="container-fluid">
				<div className="row contenedor-maps">
					<div className="col-lg-6 col-12">
						<div className="title-search-zipcode">
							<img className="logo-container-login-commerce" src={Hands} />
						</div>
					</div>
					<div className="col-lg-6">
						<MapTest />
					</div>
				</div>
			</div>

			<div className="container-fluid mb-3">
				<div className="row no-gutters">
					<div className="col-4">
						<Link to={`/feed/commerce/1`}>
							<div className="img__wrap">
								<img
									src="https://i2.wp.com/amasa.es/wp-content/uploads/2018/03/las_panaderias_han_vuelto.jpg?fit=800%2C600&ssl=1"
									className="card-img-top"
									alt="imagen1"
								/>
								<div className="img__description_layer">
									<p className="img__description search-name">Panadería Panarte.</p>
									<p className="img__description search-address">Paseo Marques de Zafra 2. Madrid</p>
									<p className="img__description search-offers">3 ofertas activas.</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/feed/commerce/2`}>
							<div className="img__wrap">
								<img
									src="https://www.mercadodelacebada.com/wp-content/uploads/2018/03/MercadoDeLaCebada_POLLERIA-ANA.jpg"
									className="card-img-top"
									alt="imagen2"
								/>
								<div className="img__description_layer">
									<p className="img__description search-name">Pollera Santa Paca.</p>
									<p className="img__description search-address">Paseo Marques de Zafra 16. Madrid</p>
									<p className="img__description search-offers">3 ofertas activas.</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/feed/commerce/3`}>
							<div className="img__wrap">
								<img
									src="https://www.lomejordelbarrio.com/image/800/600/files/uploads/file/6e2a3f01-f80e-4705-970c-b155690a6551/ferreteria-san-diego-puentevallecas-fachada1.jpg"
									className="card-img-top"
									alt="imagen3"
								/>
								<div className="img__description_layer">
									<p className="img__description search-name">Ferretería San Diego.</p>
									<p className="img__description search-address">Paseo Marques de Zafra 9. Madrid</p>
									<p className="img__description search-offers">5 ofertas activas.</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/feed/commerce/4`}>
							<div className="img__wrap">
								<img
									src="https://ep00.epimg.net/elpais/imagenes/2020/09/12/album/1599902515_614526_1599904676_album_normal.jpg"
									className="card-img-top"
									alt="imagen4"
								/>
								<div className="img__description_layer">
									<p className="img__description search-name">Ay Madre, La Fruta</p>
									<p className="img__description search-address">Paseo Marques de Zafra 39. Madrid</p>
									<p className="img__description search-offers">4 ofertas activas.</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/feed/commerce/5`}>
							<div className="img__wrap">
								<img
									src="https://ak.uecdn.es/p/108/thumbnail/entry_id/0_yh7d9ayn/width/600/"
									className="card-img-top"
									alt="imagen5"
								/>
								<div className="img__description_layer">
									<p className="img__description search-name">SBH Peluquería Unisex</p>
									<p className="img__description search-address">Calle Lanuza 7.</p>
									<p className="img__description search-offers">4 ofertas activas.</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/feed/commerce/6`}>
							<div className="img__wrap">
								<img
									src="https://t2.salir.ltmcdn.com/es/places/2/7/8/img_44872_pinturas-borreguero_0_orig.jpg"
									className="card-img-top"
									alt="imagen6"
								/>
								<div className="img__description_layer">
									<p className="img__description search-name">Papelería Borrego</p>
									<p className="img__description search-address">
										Local, Calle Rafael Juan y Seva, 5.
									</p>
									<p className="img__description search-offers">3 ofertas activas.</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/feed/commerce/7`}>
							<div className="img__wrap">
								<img
									src="https://media.timeout.com/images/105251564/image.jpg"
									className="card-img-top"
									alt="imagen7"
								/>
								<div className="img__description_layer">
									<p className="img__description search-name">El Florista</p>
									<p className="img__description search-address">Calle de Almadén, 12. Madrid</p>
									<p className="img__description search-offers">6 ofertas activas.</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/feed/commerce/8`}>
							<div className="img__wrap">
								<img
									src="https://static.miweb.padigital.es/var/m_8/88/88e/64988/950003-734149-img5.jpg"
									className="card-img-top"
									alt="imagen8"
								/>
								<div className="img__description_layer">
									<p className="img__description search-name">Talleres Díaz Auto</p>
									<p className="img__description search-address">
										Calle del Vizconde de Matamala, 14
									</p>
									<p className="img__description search-offers">2 ofertas activas.</p>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-4">
						<Link to={`/feed/commerce/9`}>
							<div className="img__wrap">
								<img
									src="http://tabernalagaditana.com/wp-content/uploads/2013/11/solea1.jpg"
									className="card-img-top"
									alt="imagen9"
								/>
								<div className="img__description_layer">
									<p className="img__description search-name">El Perro Gamberro</p>
									<p className="img__description search-address">
										Calle Benito de Castro, nº 4. Madrid
									</p>
									<p className="img__description search-offers">3 ofertas activas.</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

// SearchZipCode.propTypes = {
// 	postId: PropTypes.int
// };
