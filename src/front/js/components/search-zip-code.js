import React from "react";
import { Link } from "react-router-dom";

export const SearchZipCode = function(props) {
	return (
		<>
			<div className="card">
				<div className="card-body">
					<div>
						<p className="font-weight-bold  mb-0 text-center" style={{ color: "green" }}>
							Encuentra las mejores ofertas cerca de ti.
						</p>
						<br />
						<p className="font-weight-bold text-muted mb-3">Introduce tu ZipCode</p>
					</div>
					<div className="d-grid gap-2 d-md-block aling-items-center">
						<input
							className="form-control input-group input-group-sm mb-3"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<Link to="/search/zipcode" className="btn btn-outline-success btn-sm " type="button">
							Search
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
