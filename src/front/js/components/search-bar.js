import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";ç


export const SearchBar = function() {
    return (
    <div className="bar">
	    <form action="" method="">		    
		<input type="search" placeholder="Buscar..."/>		    	
		<button>Buscar</button>
	    </form>
    </div>);

};