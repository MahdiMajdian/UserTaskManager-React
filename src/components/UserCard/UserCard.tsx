import React from "react"

interface IUserCard {
	id: number
	name: string
	username: string
	email: string
	onSelect: any
}

const UserCard: React.FC<IUserCard> = (props) => {
	return (
		<div
			className="rounded-lg p-4 w-full flex flex-col justify-between gap-8 bg-gradient-to-tr from-orange-300 via-orange-500 to-orange-600"
			onClick={() => props.onSelect(props.id)}>
			<div>
				<h1 className="font-bold text-2xl text-white">{props.name}</h1>
				<p className="text-gray-200 font-medium">({props.username})</p>
			</div>
			<div className="flex justify-center items-center">
				{/* <TiTick className="w-6 h-6 text-green-300" /> */}
				<p className="text-white">12 tasks Remaining ...</p>
			</div>
		</div>
	)
}

export default UserCard
