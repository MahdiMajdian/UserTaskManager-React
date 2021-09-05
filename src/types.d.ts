export interface IUser {
	id: number
	name: string
	username: string
	email: string
}

export interface ITask {
	userId: number
	id: number
	title: string
	completed: boolean
}
