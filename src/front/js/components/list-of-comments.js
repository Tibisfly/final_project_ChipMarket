import React, { useState } from "react";
import PropTypes from "prop-types";

export const ListOfComments = function(props) {
	const [show, setShow] = useState(false);
	const [display, setDisplay] = useState("hide");

	function handleShow() {
	

		if (show == true) {
			setDisplay("hide");
		} else {
			setDisplay("show");
		}
		setShow(!show);
	
	}

	return (
		<>
			<div className="container">
				<div className="accordion" aria-expanded="true" id="accordionExample">
					<div className="card">
						<div className="card" id="headingOne">
							<h2 className="mb-0">
								<button
									onClick={() => handleShow()}
									className="btn btn-link btn-block text-left text-decoration-none"
									type="button"
									data-toggle="collapse"
									data-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
									style={{ color: "green" }}>
									Comentarios
								</button>
							</h2>
						</div>

						<div
							id="collapseOne"
							className={`collapse ${display}`}
							aria-labelledby="headingOne"
							data-parent="#accordionExample">
							<div className="card-body">
								<ul></ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
ListOfComments.propTypes = {
    comments=PropTypes.array
}
