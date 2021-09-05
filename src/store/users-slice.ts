import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../types"
interface ITask {
	taskId: number
	taskName: string
	taskIsDone: boolean
}

interface IAdd {
	id: number
	name: string
	username: string
	email: string
	task: ITask
}
interface IToggle {
	username: string
	taskId: number
}
const initialState: IUser[] = [
	{
		id: 1,
		name: "Mahdi Majdian",
		username: "mahdimajdian77",
		email: "MajdianMahdi@gmail.com",
		tasks: [
			{
				taskId: 0,
				taskName: "finish task manager project",
				taskIsDone: false,
			},
		],
	},
]

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addTask(state, action: PayloadAction<IAdd>) {
			const user = state.find(
				(user) => user.username === action.payload.username
			)
			if (!user) {
				state.push({
					id: action.payload.id,
					name: action.payload.name,
					username: action.payload.username,
					email: action.payload.email,
					tasks: [action.payload.task],
				})
			} else {
				user.tasks.push(action.payload.task)
			}
		},
		toggleIsDone(state, action: PayloadAction<IToggle>) {
			const user = state.find(
				(user) => user.username === action.payload.username
			)
			const task = user!.tasks.find(
				(task) => task.taskId === action.payload.taskId
			)
			task!.taskIsDone = !task!.taskIsDone
		},
		removeTask(state, action: PayloadAction<IToggle>) {
			const user = state.find(
				(user) => user.username === action.payload.username
			)
			user!.tasks = user!.tasks.filter(
				(item) => item.taskId !== action.payload.taskId
			)
		},
	},
})
export const userActions = userSlice.actions
export default userSlice
