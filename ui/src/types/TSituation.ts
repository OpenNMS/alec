export interface ApiResponse {
	count: number
	offset: number
	totalCount: number
	alarm: TSituation[]
}

export type TSituation = {
	id: string
	severity: string
	nodeId: number
	nodeLabel: string
	uei: string
	count: number
	lastTime: number
	logMessage: string
	location: string
	reductionKey: string
	type?: number
	firstEventTime: Date
	description: string
	suppressedUntil: Date
	suppressedTime: Date
	lastEvent: TEvent
	parameters: []
	x733ProbableCause: number
	ifIndex: number
	alarms: TAlarm[]
	affectedNodeCount: number
	status?: string
	creationTime: Date
	ackTime: Date
}

export type TEvent = {
	createTime: Date
	description: string
	display: string
	id: number
	label: string
	location: string
	log: string
	logMessage: string
	nodeId: number
	nodeLabel: string
	parameters: Array<any>
	severity: string
	source: string
	time: number
	uei: string
}

export type TAlarm = {
	id: number
	severity: string
	nodeId: number
	nodeLabel: string
	uei: string
	count: number
	time: Date
	logMessage: string
	firstTime: Date
	reductionKey: string
	inventoryObjectId: string
	inventoryObjectType: string
	summary: string
	clear: boolean
	description: string
	ackTime: Date
}

export type TSituationSaved = {
	id: string
	status: string
}
