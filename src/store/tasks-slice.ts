import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITask } from "../types"

const initialState: ITask[] = [
	// {
	// 	userId: 1,
	// 	id: 1,
	// 	title: "Mahdi Majdian",
	// 	completed: false,
	// },
]

const taskSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		replaceTasks(state, action: PayloadAction<ITask[]>) {
			state.splice(0, state.length, ...action.payload)
		},
		toggleComplete(state, action: PayloadAction<number>) {
			const task = state.find((item) => item.id === action.payload)
			task!.completed = !task!.completed
		},
		removeTask(state, action: PayloadAction<number>) {
			const index = state.findIndex((item) => item.id === action.payload)
			state.splice(index, 1)
		},
	},
})
export const taskActions = taskSlice.actions
export default taskSlice
