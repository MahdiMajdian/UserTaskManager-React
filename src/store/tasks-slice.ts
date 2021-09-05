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
	},
})
export const taskActions = taskSlice.actions
export default taskSlice
