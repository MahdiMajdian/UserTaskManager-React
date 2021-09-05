import React from "react"
import { TiTick } from "react-icons/ti"
import { useAppSelector } from "../../hooks/store-hook"

interface IUserCard {
	id: number
	name: string
	username: string
	email: string
	onSelect: any
}

const UserCard: React.FC<IUserCard> = (props) => {
	const userTasks = useAppSelector((state) => state.tasks).filter(
		(task) => task.userId === props.id
	)
	const remaining = userTasks.filter((item) => !item.completed).length
	const detailText = remaining
		? `${remaining} tasks Remaining ...`
		: "All Tasks Completed"
	return (
		<div
			className="rounded-lg p-4 w-full flex flex-col justify-between gap-8 bg-gradient-to-tr from-orange-300 via-orange-500 to-orange-600"
			onClick={() => props.onSelect(props.id)}>
			<div>
				<h1 className="font-bold text-2xl text-white">{props.name}</h1>
				<p className="text-gray-200 font-medium">({props.username})</p>
			</div>
			<div className="flex justify-center items-center">
				{!remaining && <TiTick className="w-6 h-6 text-green-300" />}
				<p className="text-white">{detailText}</p>
			</div>
		</div>
	)
}

export default UserCard
