import { node } from "prop-types";

const baseUrl = "https://3001-bd6a8101-44e1-427c-8eef-22d39b528d93.ws-eu03.gitpod.io/api";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			posts: [],
			feed: []
		},
		actions: {
			createUser(data) {
				const endpoint = `${baseUrl}/users`;
				const config = {
					method: "POST",
					mode: "no-cors",
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
			getAllUsers() {
				const store = setStore();

				const endpoint = `${baseUrl}/users`;
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({ users: json });
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
