const baseUrl = "https://3001-b163d749-d004-4edb-a277-5b7230bcd50e.ws-eu03.gitpod.io/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: []
		},
		actions: {
			createUser(data) {
				const endpoint = `${baseUrl}/api/users`;
				const config = {
					method: "POST",
					body: JSON.stringify({
						first_name: data.first_name,
						last_name: data.last_name,
						email: data.email,
						password: data.password,
						username: data.username
					}),
					headers: {
						"Content-Type": "application/json"
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

				const endpoint = `${baseUrl}/api/users`;
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
			}
		}
	};
};
export default getState;
