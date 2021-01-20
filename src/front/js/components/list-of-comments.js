import React, { useState } from "react";
import PropTypes from "prop-types";

export const ListOfComments = function(props) {
	const [show, setShow] = useState(false);
	const [display, setDisplay] = useState("hide");

	function handleShow() {
		console.log("antes", show, display);

		if (show == true) {
			setDisplay("hide");
		} else {
			setDisplay("show");
		}
		setShow(!show);
		console.log("después", show, display);
	}

	return (
		<>
			<div className="container">
				<div className="accordion" aria-expanded="true" id="accordionExample">
					<div className="card">
						<div className="card-header" id="headingOne">
							<h2 className="mb-0">
								<button
									onClick={() => handleShow()}
									className="btn btn-link btn-block text-left"
									type="button"
									data-toggle="collapse"
									data-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne">
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
								Some placeholder content for the first accordion panel. This panel is shown by default,
								thanks to the <code>.show</code> className.
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
