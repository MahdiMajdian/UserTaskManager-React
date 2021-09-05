import React, { useEffect, useState } from "react"
// import { TiTick } from "react-icons/ti"
import UserCard from "./components/UserCard/UserCard"
import { useAppDispatch, useAppSelector } from "./hooks/store-hook"
import { fetchData } from "./store/user-actions"
// import { IUser } from "./types"
const App: React.FC = () => {
	const [selectedUser, setSelectedUser] = useState()
	const dispatch = useAppDispatch()
	const users = useAppSelector((state) => state.users)
	useEffect(() => {
		dispatch(fetchData())
	}, [dispatch])

	const userItem = users?.map((user) => (
		<UserCard
			key={user.id}
			id={user.id}
			name={user.name}
			email={user.email}
			username={user.username}
		/>
	))
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
								125
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center gap-2">
						<p className="text-white font-semibold text-xl">
							Completed
						</p>
						<div className="rounded-full w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-orange-600 to-orange-300">
							<p className="text-white font-bold text-3xl ">
								125
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center gap-2">
						<p className="text-white font-semibold text-xl">
							Remaining
						</p>
						<div className="rounded-full w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-orange-600 to-orange-300">
							<p className="text-white font-bold text-3xl ">
								125
							</p>
						</div>
					</div>
				</div>
			</header>
			<main>
				<div className="grid grid-cols-6 w-full h-screen pt-36">
					<div className="col-span-2 flex flex-col items-center gap-4 p-4 overflow-y-auto">
						{users.length !== 0 && userItem}
						{users.length === 0 && (
							<h1 className="font-bold text-xl text-sky-500 text-center p-4">
								There is no user!
							</h1>
						)}
					</div>
					<div className="col-span-4 bg-sky-100">
						{/* {!selectedUser && <h1 className='p-8'>Select user to begin with</h1>} */}
						<div className='h-full'>
							<div className='bg-orange-600 flex'>
								<div>
									<h1>Mahdi Majdian</h1>
									<p>(majdian_mahdi)</p>
									<p>MajdianMahdi@gmail.com</p>
								</div>
								<div></div>
							</div>
							<div className='bg-orange-500'>sdfsdf</div>

						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default App
