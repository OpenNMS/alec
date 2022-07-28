export const alarmInfo = {
	id: 36,
	uei: '“uei.org.opennms/interfaceMajorEvent”',
	location: 'Default',
	reductionKey: '“uei.org.opennms/interfaceMajorEvent”::4:',
	type: 3,
	count: 3,
	severity: 'MAJOR',
	firstEventTime: 1656954162070,
	description:
		'<p>An event with no matching configuration was received from interface . This event\n            included the following parameters:\n            </p>',
	logMessage:
		'An event with no matching configuration was received from interface .\n        ',
	suppressedUntil: 1656954162070,
	suppressedTime: 1656954162070,
	lastEvent: {
		id: 110,
		uei: '“uei.org.opennms/interfaceMajorEvent”',
		time: 1656954163963,
		source: 'KarafShell_send-event',
		parameters: [],
		createTime: 1656954163971,
		description:
			'<p>An event with no matching configuration was received from interface . This event\n            included the following parameters:\n            </p>',
		logMessage:
			'An event with no matching configuration was received from interface .\n        ',
		severity: 'MAJOR',
		log: 'Y',
		display: 'Y',
		location: 'Default'
	},
	parameters: [],
	lastEventTime: 1656954163963,
	x733ProbableCause: 0,
	ifIndex: null,
	relatedAlarms: [
		{
			id: 37,
			type: 2,
			severity: 'CRITICAL',
			reductionKey: '“uei.org.opennms/interfaceCriticalEvent”::12:',
			description:
				'<p>An event with no matching configuration was received from interface . This event\n            included the following parameters:\n            </p>',
			logMessage:
				'An event with no matching configuration was received from interface .\n        '
		}
	],
	affectedNodeCount: 0
}
