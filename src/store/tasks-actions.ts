import { taskActions } from "./tasks-slice"

export const fetchTasks = () => {
	return async (dispatch: any) => {
		const fetchTaskData = async () => {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/todos"
			)
			if (!response.ok) {
				throw new Error("Connection failed!")
			}
			const data = await response.json()

			return data
		}

		try {
			const TasksData = await fetchTaskData()
			dispatch(taskActions.replaceTasks(TasksData))
		} catch (error) {
			console.log("fetching failed")
		}
	}
}
