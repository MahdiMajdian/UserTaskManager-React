import { userActions } from "./users-slice"

export const fetchUsers = () => {
	return async (dispatch: any) => {
		const fetchUserData = async () => {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/users"
			)
			if (!response.ok) {
				throw new Error("Connection failed!")
			}
			const responseData = await response.json()
			const data = responseData.map((item: any) => {
				return {
					id: item.id,
					name: item.name,
					username: item.username,
					email: item.email,
				}
			})
			return data
		}
		try {
			const usersData = await fetchUserData()
			dispatch(userActions.replaceUsers(usersData))
		} catch (error) {
			console.log("fetching failed")
		}
	}
}
