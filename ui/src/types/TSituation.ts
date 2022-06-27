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
	lastEventTime: number
	logMessage: string
	location: string
	reductionKey: string
	type: number
	firstEventTime: Date
	description: string
	suppressedUntil: Date
	suppressedTime: Date
	lastEvent: TEvent
	parameters: []
	x733ProbableCause: number
	ifIndex: number
	relatedAlarms: TRelatedAlarm[]
	affectedNodeCount: number
}

export type TEvent = {
	createTime: number
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

export type TRelatedAlarm = {
	id: number
	type: number
	severity: string
	reductionKey: string
	description: string
	logMessage: string
}

export type TAlarm = {
	id: string
	severity: string
	nodeId: number
	nodeLabel: string
	uei: string
	count: number
	lastEventTime: number
	logMessage: string
}
