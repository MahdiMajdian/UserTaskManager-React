import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { stat } from "fs"
import { IUser } from "../types"
interface IUsers {
	items: IUser[]
}
const initialState: IUser[] = [
	// {
	// 	id: 1,
	// 	name: "Mahdi Majdian",
	// 	username: "mahdimajdian77",
	// 	email: "MajdianMahdi@gmail.com",
	// },
]

const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		replaceUsers(state, action: PayloadAction<IUser[]>) {
			state.splice(0 , state.length , ...action.payload)
		},
	},
})
export const userActions = userSlice.actions
export default userSlice
