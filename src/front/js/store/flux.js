
const baseUrl = "https://3001-coral-dog-ua2bxtz5.ws-eu03.gitpod.io/api";


const getState = ({ getStore, getActions, setStore }) => {
	const token = localStorage.getItem("token");
	return {
		store: {
			user: [],
			feed: [],
			post: {},
			commerce: [],
			follows: [],
			token: token,
			error: null
		},
		actions: {
			createUser(data, callback) {
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
						console.log(json);
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
						setStore({ error: null });
						return response.json();
					})
					.then(json => {
						setStore({ token: json.token });
						localStorage.setItem("token", json.token);
						callback();
					})
					.catch(error => {
						setStore(error);
					});
			},
			logOut() {
				localStorage.removeItem("token");
				setStore({ token: null });
			},
			createCommerce(data, callback) {
				const store = getStore();
				const endpoint = `${baseUrl}/commerces`;
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
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${store.token}`
					}
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({ commerce: json });
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
			getCommerceFeed(id) {
				const store = getStore();

				const endpoint = `${baseUrl}/commerces/feed/${id}`;
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
						media_url: data.mediaUrl,
						commerce: data.commerce_id
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
			},
			getFollowCommerce(id) {
				const store = getStore();
				const endpoint = `${baseUrl}${id}/followers/`;
				const method = "GET";
				const headers = { "Content-Type": "application/json" };

				if (store.token) {
					headers["Authorization"] = `Bearer ${store.token}`;
				}

				const config = {
					method: method,
					headers: headers
				};
				fetch(endpoint, config)
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({ follows: data });
						console.log("followers: ", store.followers);
					});
			},
			followCommerce(data, callback) {
				const store = getStore();
				const endpoint = `${baseUrl}/followers`;
				const config = {
					method: "POST",
					body: JSON.stringify({
						user_id: data.user_id,
						commerce_id: data.commerce_id
					}),
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						Authorization: `Bearer ${store.token}`
					}
				};
				fetch(endpoint, config)
					.then(response => {
						if (response.status == 403) {
							setStore({ error: response });
							throw "Usuario o contraseña incorrecta";
						}
						setStore({ error: null });
						return response.json();
					})
					.then(json => {
						setStore({ token: json.token });
						localStorage.setItem("token", json.token);
						callback();
					})
					.catch(error => {
						setStore(error);
					});
			},
			deleteFollowCommerce(data, callback) {
				const store = getStore();
				const endpoint = `${baseUrl}/commerces/followers/${data.commerce_id}/${data.user_id}`;

				const config = {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						Authorization: `Bearer ${store.token}`
					}
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						actions.getFollowCommerce(data.user_id);
						callback();
					})
					.catch(error => {
						setStore(error);
					});
			}
		}
	};
};

export default getState;
