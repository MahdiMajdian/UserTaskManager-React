import React, { useState } from "react"
import { RiCloseCircleFill } from "react-icons/ri"
import { useAppDispatch } from "../../hooks/store-hook"
import { taskActions } from "../../store/tasks-slice"
interface ITaskItem {
	id: number
	title: string
	completed: boolean
}
const TaskItem: React.FC<ITaskItem> = (props) => {
	const [isChecked, setIsChecked] = useState(props.completed)
	const dispatch = useAppDispatch()
	const checkHandler = () => {
		setIsChecked((prev) => !prev)
		dispatch(taskActions.toggleComplete(props.id))
	}
	const removeHandler = () => {
		dispatch(taskActions.removeTask(props.id))
	}
	return (
		<div>
			<div className="rounded-lg bg-white shadow-md overflow-hidden flex gap-4 justify-between items-center p-4">
				<div className="flex items-center gap-2">
					<input
						type="checkbox"
						className="w-5 h-5"
						checked={isChecked}
						onChange={checkHandler}
					/>
					<p className={`${isChecked && "line-through"}`}>
						{props.title}
					</p>
				</div>
				<RiCloseCircleFill
					onClick={removeHandler}
					className="w-6 h-6 text-rose-600"
				/>
			</div>
		</div>
	)
}

export default TaskItem
