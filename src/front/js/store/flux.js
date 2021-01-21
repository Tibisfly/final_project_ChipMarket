import { node } from "prop-types";

const baseUrl = "https://3001-cf543894-b2d0-433d-a331-6e4b86b637b0.ws-eu03.gitpod.io/api";
const getState = ({ getStore, getActions, setStore }) => {
	const token = localStorage.getItem("token");
	return {
		store: {
			user: [],
			feed: [],
			post: {},
			commerce: [],
			token: token,
			error: null
		},
		actions: {
			createUser(data, callback) {
				console.log("esto es data", data);
				const endpoint = `${baseUrl}/users`;
				const config = {
					method: "POST",
					body: JSON.stringify({
						first_name: data.firstName,
						last_name: data.lastName,
						email: data.email,
						password: data.password,
						username: data.username
					}),

					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*"
					}
				};
				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({ token: json.token });
						localStorage.setItem("token", json.token);
						callback();
					})
					.catch(error => {
						console.log(error);
					});
			},
			updateUser(data, callback) {
				const store = getStore();
				const endpoint = `${baseUrl}/users`;
				const config = {
					method: "PUT",
					body: JSON.stringify({
						first_name: data.firstName,
						last_name: data.lastName,
						username: data.username
					})
				};
				const headers = { "Content-Type": "application/json" };

				headers["Authorization"] = `Bearer ${store.token}`;

				fetch(endpoint, config)
					.then(response => {
						console.log(response);
						return response.json();
					})
					.then(json => {
						setStore({ user: json });
						callback();
					})
					.catch(error => {
						console.log(error);
					});
			},
			logIn(data, callback) {
				const endpoint = `${baseUrl}/login`;
				const config = {
					method: "POST",
					body: JSON.stringify({
						email: data.email,
						password: data.password
					}),
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*"
					}
				};
				fetch(endpoint, config)
					.then(response => {
						if (response.status == 403) {
							setStore({ error: response });
							throw "Usuario o contraseña incorrecta";
						}
						return response.json();
					})
					.then(json => {
						setStore({ token: json.token });
						localStorage.setItem("token", json.token);
						callback();
					})
					.catch(error => {
						console.log("error");
					});
			},
			logOut() {
				localStorage.removeItem("token");
				setStore({ token: null });
			},
			createCommerce(data, callback) {
				const store = getStore();
				const endpoint = `${baseUrl}/commerces`;
				let headers = { "Content-Type": "application/json" };
				headers["Authorization"] = `Bearer ${store.token}`;
				const config = {
					method: "POST",
					body: JSON.stringify({
						business_name: data.businessName,
						street_name: data.streetName,
						street_number: data.streetNumber,
						title: data.title,
						description: data.description,
						city: data.city,
						country: data.country,
						zip_code: data.zipCode
					}),
					headers: headers
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({ commerce: json.commerce });
						callback();
					})
					.catch(error => {});
			},
			getOneUser() {
				const store = getStore();

				const endpoint = `${baseUrl}/users`;
				let headers = { "Content-Type": "application/json" };
				headers["Authorization"] = `Bearer ${store.token}`;
				const config = {
					headers: headers,
					method: "GET"
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						console.log("json de getoneUser", json);
						setStore({ user: json });
					});
			},
			getOneCommerce(id) {
				const store = getStore();

				const endpoint = `${baseUrl}/commerces/${id}`;
				let headers = { "Content-Type": "application/json" };
				headers["Authorization"] = `Bearer ${store.token}`;
				const config = {
					headers: headers,
					method: "GET"
				};

				return fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						console.log("json de getoneCommerce", json);
						setStore({ commerce: json });
					});
			},
			deleteCommerce() {
				const endpoint = `${baseUrl}/commerces/${id}`;

				const config = {
					method: "DELETE"
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						return console.log(json());
					});
			},
			getUserFeed() {
				const store = getStore();

				const endpoint = `${baseUrl}/users/feed`;
				let headers = { "Content-Type": "application/json" };
				headers["Authorization"] = `Bearer ${store.token}`;
				const config = {
					headers: headers,
					method: "GET"
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({ feed: json });
					});
			},
			createPost(data, callback) {
				const store = getStore();
				const endpoint = `${baseUrl}/commerces/posts`;
				let headers = { "Content-Type": "application/json" };
				headers["Authorization"] = `Bearer ${store.token}`;

				const config = {
					method: "POST",
					body: JSON.stringify({
						title: data.title,
						description: data.description,
						media_type: data.mediaType,
						media_url: data.mediaUrl
					}),
					headers: headers
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({ post: json.post });
						callback();
					})
					.catch(error => {
						console.log(error);
					});
			},
			getPost(id) {
				const store = getStore();

				const endpoint = `${baseUrl}/posts/${id}`;
				let headers = { "Content-Type": "application/json" };
				headers["Authorization"] = `Bearer ${store.token}`;
				const config = {
					headers: headers,
					method: "GET"
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({ post: json });
					});
			}
		}
	};
};

export default getState;
