import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/store-hook"
import { taskActions } from "../../store/tasks-slice"
import TaskItem from "../TaskItem/TaskItem"
interface IUserPage {
	userId: number
}
const UserPage: React.FC<IUserPage> = (props) => {
	const dispatch = useAppDispatch()
	const user = useAppSelector((state) => state.users).find(
		(item) => item.id === props.userId
	)
	const userTasks = useAppSelector((state) => state.tasks).filter(
		(item) => item.userId === user?.id
	)
	const totalTasks = userTasks.length
	const completedTasks = userTasks.reduce(
		(sum, cur) => sum + (cur.completed ? 1 : 0),
		0
	)
	const [inputValue, setInputValue] = useState("")
	const addTaskHandler = () => {
		if (inputValue.trim().length !== 0) {
			const task = {
				userId: props.userId,
				id: Date.now(),
				title: inputValue,
				completed: false,
			}
			dispatch(taskActions.addTask(task))
		}
		setInputValue("")
	}
	return (
		<div className="h-screen pt-40">
			<div className="h-full flex flex-col gap-2">
				<div className="flex justify-between">
					<div className="p-8">
						<h1 className="text-4xl font-medium pb-12">
							{user?.name}
						</h1>
						<p className="text-gray-700">({user?.username})</p>
						<p className="text-gray-700">{user?.email}</p>
					</div>
					<div className="w-52 h-52 mr-12 p-6">
						<div className="bg-sky-400 rounded-full text-white text-5xl flex justify-center items-center w-full h-full">
							{totalTasks !== 0
								? Math.round(
										(completedTasks / totalTasks) * 100
								  )
								: 0}
							%
						</div>
						<p className="text-center">Completed</p>
					</div>
				</div>
				<div className="px-8">
					<div className="border-t py-4 flex justify-between mt-4 border-b border-gray-400">
						<p>Tasks: {totalTasks}</p>
						<p>{totalTasks - completedTasks} Task Remaining</p>
					</div>
				</div>

				<div className="h-full p-4 pt-2 overflow-y-auto flex flex-col gap-2 pb-4 ">
					{userTasks.map((task) => (
						<TaskItem
							key={task.id}
							id={task.id}
							title={task.title}
							completed={task.completed}
						/>
					))}
				</div>
				<div className="rounded-lg m-2 mt-0 bg-white shadow-md flex gap-4 justify-center items-center p-4">
					<input
						type="text"
						value={inputValue}
						onChange={(event) => setInputValue(event.target.value)}
						className="bg-gray-200 rounded-full outline-none px-4 h-full w-full"
					/>
					<button
						className={`rounded-lg ${
							inputValue.trim().length !== 0
								? "bg-green-500"
								: "bg-green-300"
						} text-white py-2 px-4`}
						onClick={addTaskHandler}>
						Add
					</button>
				</div>
			</div>
		</div>
	)
}

export default UserPage
