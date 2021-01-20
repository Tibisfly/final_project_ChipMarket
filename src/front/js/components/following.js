import React from "react";

export const Following = function(props) {
	return (
		<>
			<div className="card">
				<div className="card-body">
					<div>
						<p className="font-weight-bold text-muted">Comercios seguidos</p>
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
		</>
	);
};
