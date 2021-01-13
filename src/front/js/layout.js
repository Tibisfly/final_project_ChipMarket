import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/scroll-to-top";

import { Home } from "./views/home";
import { Feed } from "./views/feed";
import injectContext from "./store/appContext";
import { Profile } from "./views/profiles";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Register } from "./views/register";
import { CommercesForm } from "./views/commerces-form";
import { LogIn } from "./views/log-in";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/feed">
							<Feed />
						</Route>
						<Route exact path="/users">
							<Register />
						</Route>
						<Route exact path="/users/:id">
							<Register />
						</Route>
						<Route exact path="/profiles">
							<Profile />
						</Route>
						<Route exact path="/commerces">
							<CommercesForm />
						</Route>
						<Route exact path="/login">
							<LogIn />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
