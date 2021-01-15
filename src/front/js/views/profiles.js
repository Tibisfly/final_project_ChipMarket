import React from "react";

export const Profile = function(props) {
	return (
		// <div className="container-fluid p-4 d-flex">
		// 	<img
		// 		id="profile-picture"
		// 		src="https://images.unsplash.com/photo-1610642433478-630fab962814?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
		// 		alt="..."
		// 	/>
		// 	<div className="mx-5">
		// 		<h1 className="fw-bold">Perfil de ChipAddict:</h1>
		// 		<h3 className="fw-bolder">Username:</h3>
		// 	</div>
		// </div>

		<div className="bg-white shadow rounded overflow-hidden">
			<div className="px-4 pt-0 pb-4 cover">
				<div className="media align-items-end profile-head">
					<div className="profile mr-3">
						<img
							src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
							alt="..."
							width="130"
							className="rounded mb-2 img-thumbnail"
						/>
						<a href="#" className="btn btn-outline-dark btn-sm btn-block">
							Edit profile
						</a>
					</div>
					<div className="media-body mb-5 text-white">
						<h4 className="mt-0 mb-0">Mark Williams</h4>
						<p className="small mb-4">
							{" "}
							<i className="fas fa-map-marker-alt mr-2"></i>New York
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
