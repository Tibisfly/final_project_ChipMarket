import React from "react";
import { Link } from "react-router-dom";

export const SearchZipCode = function(props) {
	return (
		<>
			<div className="card mt-5">
				<div className="card-body">
					<div>
						<p className="font-weight-bold text-muted mb-0">Encuentra las mejores ofertas</p>
						<small className="font-weight-bold text-muted mb-3">Introduce tu ZipCode</small>
					</div>
					<div className="d-grid gap-2 d-md-block">
						<input
							className="form-control input-group input-group-sm mb-3"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<Link to="/search/zipcode" className="btn btn-outline-success btn-sm" type="button">
							Search
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
