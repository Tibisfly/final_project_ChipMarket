import { node } from "prop-types";

const baseUrl = "https://3001-b3ae0769-ca53-49a8-b68c-9ac28a435196.ws-eu03.gitpod.io/api";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [],
			posts: [],
			feed: [],
			token: null
		},
		actions: {
			createUser(data) {
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
			updateUser(data, id) {
				const state = getState();
				const endpoint = `${baseUrl}/users${id}`;
				const config = {
					method: "PUT",
					body: JSON.stringify({
						first_name: data.firstName,
						last_name: data.lastName,
						username: data.username
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
						state.setStore(store.users);
					})
					.catch(error => {
						console.log(error);
					});
			},

			LogIn(data, callback) {
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
						return response.json();
					})
					.then(json => {
						setStore({ token: json });
						callback();
					})
					.catch(error => {
						console.log(error);
					});
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
			// getAllUsers() {
			// 	const store = setStore();

			// 	const endpoint = `${baseUrl}/users`;
			// 	const config = {
			// 		method: "GET"
			// 	};
			// 	fetch(endpoint, config)
			// 		.then(response => {
			// 			return response.json();
			// 		})
			// 		.then(json => {
			// 			setStore({ users: json });
			// 		});
			//creo que no lo necesitamos en el front. Para qué? },
			getOneUser() {
				const store = getStore();
				console.log(store.token, "Esto es token en el getOneUser");
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
			// getFeed(id) {
			// 	const store = setStore();
			// 	const endpoint = `${baseUrl}/users/${id}/feed`;
			// 	const config = {
			// 		method: "GET",
			// 		mode: "no-cors"
			// 	};
			// 	fetch(endpoint, config)
			// 		.then(response => response.text())
			// 		.then(result => console.log(result))
			// 		.catch(error => console.log("error", error));
			// }
			getFeedAsync: async id => {
				//async way
				const endpoint = `${baseUrl}/users/${id}/feed`;
				let requestOptions = { method: "GET", redirect: "follow" };
				try {
					let res = await fetch(endpoint, requestOptions);
					let result = await res.json();
					let active = await setStore({});
					let feed = await result;
					setStore({ feed: feed });
				} catch (error) {
					console.log("error", error);
				}
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
