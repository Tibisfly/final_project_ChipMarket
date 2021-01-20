import { node } from "prop-types";

const baseUrl = "https://3001-fd2c1ae3-04d5-4157-ba91-daee8df9b087.ws-eu03.gitpod.io/api";
const getState = ({ getStore, getActions, setStore }) => {
	const token = localStorage.getItem("token");
	return {
		store: {
			user: [],
			posts: [],
			feed: [],
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
						callback();
					});
			},
			logOut() {
				localStorage.removeItem("token");
				setStore({ token: null });
			},
			createCommerce(data) {
				const endpoint = `${baseUrl}/commerces`;
				console.log("Esto es data:", data);
				const config = {
					method: "POST",
					body: JSON.stringify({
						owner_id: data.ownerId,
						business_name: data.businessName,
						street_name: data.streetName,
						street_number: data.streetNumber,
						title: data.title,
						description: data.description,
						city: data.city,
						country: data.country,
						zip_code: data.zipCode
					}),
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*"
					}
				};

				fetch(endpoint, config)
					.then(response => {
						console.log(response);
						return response.json();
					})
					.then(json => {
						console.log(json);
					})
					.catch(error => {
						console.log(error);
					});
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
						setStore({ user: json });
					});
			},
			getOneCommerce(id) {
				const endpoint = `${baseUrl}/commerces/${id}`;
				const config = {
					method: "GET"
				};

				return fetch(endpoint, config).then(response => {
					return response.json();
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

			// getFeedAsync: async id => {
			// 	const endpoint = `${baseUrl}/users/feed`;
			//     let requestOptions = { method: "GET", redirect: "follow" };

			// 	try {
			// 		let res = await fetch(endpoint, requestOptions);
			// 		let result = await res.json();
			// 		let active = await setStore({});
			// 		let feed = await result;
			// 		setStore({ feed: feed });
			// 	} catch (error) {
			// 		console.log("error", error);
			// 	}
			// },
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
			}
			// getPost(){
			//     const store = setStore();
			// 	const endpoint = `${baseUrl}/posts/<int:id>`;
			// 	const config = {
			// 		method: "GET",
			// 		mode: "no-cors"
			// };
			//     fetch(endpoint, config).
			//         then(response => {
			// 		return response.json();
		}
	};
};
export default getState;
