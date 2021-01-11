import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const UpButton = function() {
	return (
		<div className="uploadbutton">
			<input accept="image/*" className="input" id="contained-button-file" multiple type="file" />
			{/* <label htmlFor="contained-button-file"> */}
			{/* <button variant="contained" color="primary" component="span">
				Upload
			</button> */}
			{/* </label> */}
		</div>
	);
};
