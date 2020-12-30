<<<<<<< HEAD
const baseUrl = "https://3001-b163d749-d004-4edb-a277-5b7230bcd50e.ws-eu03.gitpod.io/api/";
=======
import { node } from "prop-types";

const baseUrl = "https://3001-a5e205e9-112a-43e9-913d-0dc80cdb9a32.ws-eu03.gitpod.io/api";
>>>>>>> 9241c93058ec6a416f9a2eecd729b5615fbd5baf
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			posts: [],
			feed: []
		},
		actions: {
			createUser(data) {
<<<<<<< HEAD
				const endpoint = `${baseUrl}users`;
=======
				const endpoint = `${baseUrl}/users`;
>>>>>>> 9241c93058ec6a416f9a2eecd729b5615fbd5baf
				const config = {
					method: "POST",
					mode: "no-cors",
					body: JSON.stringify({
						first_name: data.first_name,
						last_name: data.last_name,
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
						//check if is a 201 and if the response has the id of the user/model
						return response.json();
					})
					.then(json => {
						console.log(response.json());
					});
			},
			getAllUsers() {
				// la necesito?
				const store = setStore();

<<<<<<< HEAD
				const endpoint = `${baseUrl}users`;
=======
				const endpoint = `${baseUrl}/users`;
>>>>>>> 9241c93058ec6a416f9a2eecd729b5615fbd5baf
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
