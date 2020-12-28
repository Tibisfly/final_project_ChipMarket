import React, { useContext, useState } from "react"
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const Register = function(props){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [active, setActive] = useState (false)

    const params = useParams()

    return(
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="inputFirstName">First name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputFirstName" 
                        aria-describedby="firstNameHelp" 
                        placeholder = "Enter your first name"
                        value = {firstName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputLastName">Last Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputLastName" 
                        aria-describedby="lastNameHelp" 
                        placeholder = "Enter your last name"
                        value = {lastName} />
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="inputEmail" 
                        aria-describedby="emailHelp"
                        placeholder = "Enter your email" 
                        value = {email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        aria-describedby="emailHelp"
                        placeholder="Password"
                        value = {password}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inputUsername">Username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputUsername" 
                        aria-describedby="usernameHelp"
                        placeholder = "Username" 
                        value = {username}/>
                </div>
                <div className="form-group form-check">
                    <label className="form-check-label" htmlFor="inputActive">Active</label>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="inputActive"
                        aria-describedby="activeHelp"
                        checked ={active} />
                </div>
            </form>
        </>
    );
}