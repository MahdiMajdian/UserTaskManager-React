import { configureStore } from "@reduxjs/toolkit"
import taskSlice from "./tasks-slice"
import userSlice from "./users-slice"

const store = configureStore({
	reducer: {
		users: userSlice.reducer,
		tasks: taskSlice.reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
