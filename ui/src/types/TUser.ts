export interface IWhoAmIResponse {
	fullName: string
	id: string
	internal: boolean
	roles: string[]
}

export type TEngine = {
	engineName: string
	distanceMeasureName: string
	alpha: number
	beta: number
	epsilon: number
}
