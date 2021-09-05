import React from "react"
import { RiCloseCircleFill } from "react-icons/ri"

const TaskItem = () => {
	return (
		<div>
			<div className="rounded-lg bg-white shadow-md overflow-hidden flex gap-4 justify-between items-center p-4">
				<div className="flex items-center gap-2">
					<input type="checkbox" className="w-5 h-5" />
					<p>Task Title</p>
				</div>
				<RiCloseCircleFill className="w-6 h-6 text-rose-600" />
			</div>
		</div>
	)
}

export default TaskItem
