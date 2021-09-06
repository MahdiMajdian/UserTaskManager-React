import React, { useEffect, useState } from "react"
import UserCard from "./components/UserCard/UserCard"
import { useAppDispatch, useAppSelector } from "./hooks/store-hook"
import { fetchUsers } from "./store/users-actions"
import { fetchTasks } from "./store/tasks-actions"
import UserPage from "./components/UserPage/UserPage"
const App: React.FC = () => {
	const [selectedUser, setSelectedUser] = useState<number>()
	const dispatch = useAppDispatch()
	const users = useAppSelector((state) => state.users)
	const tasks = useAppSelector((state) => state.tasks)
	useEffect(() => {
		dispatch(fetchTasks())
		dispatch(fetchUsers())
	}, [dispatch])

	const selectUserHandler = (id: number) => {
		setSelectedUser(id)
	}
	const userItem = users?.map((user) => (
		<UserCard
			key={user.id}
			id={user.id}
			name={user.name}
			email={user.email}
			username={user.username}
			onSelect={selectUserHandler}
		/>
	))
	const totalTasks = tasks.length
	const completedTasks = tasks.reduce(
		(sum, cur) => sum + (cur.completed ? 1 : 0),
		0
	)
	const remainingTasks = totalTasks - completedTasks
	return (
		<div className="h-screen poppins">
			<header className="w-full fixed flex items-center justify-between h-36 bg-gradient-to-tr from-sky-500 to-sky-400">
				<h1 className="font-medium text-white text-3xl p-8">
					Task Managment
				</h1>
				<div className="flex gap-16 px-16">
					<div className="flex flex-col items-center gap-2">
						<p className="text-white font-semibold text-xl">
							Total
						</p>
						<div className="rounded-full w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-orange-600 to-orange-300">
							<p className="text-white font-bold text-3xl ">
								{totalTasks}
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center gap-2">
						<p className="text-white font-semibold text-xl">
							Completed
						</p>
						<div className="rounded-full w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-orange-600 to-orange-300">
							<p className="text-white font-bold text-3xl ">
								{completedTasks}
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center gap-2">
						<p className="text-white font-semibold text-xl">
							Remaining
						</p>
						<div className="rounded-full w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-orange-600 to-orange-300">
							<p className="text-white font-bold text-3xl ">
								{remainingTasks}
							</p>
						</div>
					</div>
				</div>
			</header>
			<main>
				<div className="grid grid-cols-6 w-full h-screen">
					<div className="col-span-2 flex flex-col items-center gap-4 p-4 pt-40 overflow-y-auto">
						{users.length !== 0 && userItem}
						{users.length === 0 && (
							<h1 className="font-bold text-xl text-sky-500 text-center p-4">
								There is no user!
							</h1>
						)}
					</div>
					<div className="col-span-4 bg-sky-100">
						{!selectedUser && (
							<h1 className="p-8 pt-48">
								Select user to begin with
							</h1>
						)}
						{selectedUser && <UserPage userId={selectedUser} />}
					</div>
				</div>
			</main>
		</div>
	)
}

export default App
