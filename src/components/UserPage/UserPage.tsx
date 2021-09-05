import React from "react"
import { useAppSelector } from "../../hooks/store-hook"
import TaskItem from "../TaskItem/TaskItem"
interface IUserPage {
	userId: number
}
const UserPage: React.FC<IUserPage> = (props) => {
	const user = useAppSelector((state) => state.users).find(
		(item) => item.id === props.userId
	)
    console.log(user)
	return (
		<div className="h-full flex flex-col justify-between">
			<div>
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
							100%
						</div>
						<p className="text-center">Completed</p>
					</div>
				</div>
				<div className="px-8">
					<div className="border-t py-4 flex justify-between mt-4 border-b border-gray-400">
						<p>Tasks: 20</p>
						<p>8 Task Remaining</p>
					</div>
				</div>
			</div>

			<div className="h-full flex flex-col justify-between p-4 pt-2">
				<div className="flex flex-col h-64 overflow-y-auto gap-2">
					<TaskItem />
					<TaskItem />
					<TaskItem />
					<TaskItem />
					<TaskItem />
					<TaskItem />
				</div>
				<div className="rounded-lg bg-white shadow-md overflow-hidden flex gap-4 justify-center items-center p-4">
					<input
						type="text"
						className="bg-gray-200 rounded-full outline-none px-4 h-full w-full"
					/>
					<button className="rounded-lg bg-green-300 hover:bg-green-400 text-white py-2 px-4">
						Add
					</button>
				</div>
			</div>
		</div>
	)
}

export default UserPage
