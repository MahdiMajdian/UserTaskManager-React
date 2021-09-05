import React from "react"

function App() {
	return (
		<>
			<header className="w-full flex items-center justify-between h-36 bg-gradient-to-tr from-sky-400 to-purple-600 ">
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
		</>
	)
}

export default App
