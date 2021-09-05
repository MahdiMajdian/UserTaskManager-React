import React from "react"

const UserCard = () => {
	return (
		<div className="rounded-lg p-4 w-full flex flex-col justify-between gap-8 bg-gradient-to-tr from-sky-400 to-purple-600">
			<div>
				<h1 className="font-bold text-2xl text-white">Mahdi Majdian</h1>
				<p className="text-gray-200 font-medium">(majdian_mahdi)</p>
			</div>
			<div className="flex justify-center items-center">
				{/* <TiTick className="w-6 h-6 text-green-300" /> */}
				<p className="text-white">12 tasks Remaining ...</p>
			</div>
		</div>
	)
}

export default UserCard
