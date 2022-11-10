export interface ApiResponse {
	count: number
	offset: number
	totalCount: number
	alarm: TSituation[]
}

export type TSituation = {
	id: number
	severity: string
	nodeId: number
	nodeLabel: string
	uei: string
	relatedAlarms: TAlarm[]
	count: number
	lastEventTime: number
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
	reductionKeyMemo: TReductionKeyMemo
	stickyMemo: TMemo
	events: Record<number, TEvent[]>
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
	lastEventTime: Date
	logMessage: string
	firstEventTime: Date
	reductionKey: string
	inventoryObjectId: string
	inventoryObjectType: string
	summary: string
	clear: boolean
	description: string
	ackTime: Date
	reductionKeyMemo: TReductionKeyMemo
	stickyMemo: TMemo
}

export type TSituationSaved = {
	id: string
	status: string
}
export type TNewSituation = {
	alarmIdList: string[]
	diagnosticText: string
	description: string
}

export type TNode = {
	id: number
	label: string
}

export type TMemo = {
	id: number
	body: string
	author: string
	updated: Date
	created: Date
}

export type TReductionKeyMemo = {
	reductionkey: string
} & TMemo
