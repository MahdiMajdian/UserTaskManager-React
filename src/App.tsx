import React from "react"
import { TiTick } from "react-icons/ti"
function App() {
	return (
		<div className="h-screen poppins">
			<header className="w-full fixed flex items-center justify-between h-36 bg-gradient-to-tr from-sky-400 to-purple-600">
				<h1 className="font-medium text-white text-3xl p-8">
					Task Managment
				</h1>
				<div className="flex gap-16 px-16">
					<div className="flex flex-col items-center gap-2">
						<p className="text-white font-semibold text-xl">
							Total
						</p>
						<div className="rounded-full w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-sky-600 to-sky-300">
							<p className="text-white font-bold text-3xl ">
								125
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center gap-2">
						<p className="text-white font-semibold text-xl">
							Completed
						</p>
						<div className="rounded-full w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-sky-600 to-sky-300">
							<p className="text-white font-bold text-3xl ">
								125
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center gap-2">
						<p className="text-white font-semibold text-xl">
							Remaining
						</p>
						<div className="rounded-full w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-sky-600 to-sky-300">
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
						<div className="rounded-lg p-4 w-full h-36 flex flex-col justify-between bg-gradient-to-tr from-sky-400 to-purple-600">
							<div>
								<h1 className="font-bold text-2xl text-white">
									Mahdi Majdian
								</h1>
								<p className="text-gray-200 font-medium">
									(majdian_mahdi)
								</p>
							</div>
							<div className="flex justify-center items-center">
								{/* <TiTick className="w-6 h-6 text-green-300" /> */}
								<p className="text-white">
									12 tasks Remaining ...
								</p>
							</div>
						</div>
					</div>
					<div className="col-span-4 bg-sky-100">s</div>
				</div>
			</main>
		</div>
	)
}

export default App
