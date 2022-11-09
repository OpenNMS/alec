export const situationsMock = [
	{
		id: 607,
		uei: 'uei.opennms.org/alarms/situation',
		location: 'Default',
		nodeId: 1,
		nodeLabel: 'localhost',
		reductionKey:
			'uei.opennms.org/alarms/situation:b6384c97-74ec-4784-8212-c1d78af365cb',
		type: 3,
		count: 2,
		severity: 'CRITICAL',
		firstEventTime: 1667228114512,
		description:
			'<p>An event with no matching configuration was received from interface . This event\n            included the following parameters:\n            </p>\n<p>ALEC Diagnostic: The 2 alarms happened within 2.12 seconds across 1 vertices.</p>',
		logMessage:
			'An event with no matching configuration was received from interface .',
		suppressedUntil: 1667228114512,
		suppressedTime: 1667228114512,
		ackUser: 'admin',
		ackTime: 1667329957041,
		lastEvent: {
			id: 739,
			uei: 'uei.opennms.org/alarms/situation',
			label: 'Alarm: Situation',
			time: 1667329957084,
			source: 'alec',
			parameters: [
				{
					name: 'situationId',
					value: 'b6384c97-74ec-4784-8212-c1d78af365cb',
					type: 'string'
				},
				{
					name: 'situationLogMsg',
					value:
						'An event with no matching configuration was received from interface .\n        ',
					type: 'string'
				},
				{
					name: 'situationDescr',
					value:
						'<p>An event with no matching configuration was received from interface . This event\n            included the following parameters:\n            </p>',
					type: 'string'
				},
				{
					name: 'related-reductionKey1',
					value: 'uei.org.opennms/interfaceMinorEvent140::1:',
					type: 'string'
				},
				{
					name: 'related-reductionKey2',
					value: 'uei.org.opennms/interfaceMinorEvent141::1:',
					type: 'string'
				},
				{
					name: 'situationStatus',
					value: 'ACCEPTED',
					type: 'string'
				}
			],
			createTime: 1667329957096,
			description:
				'<p>An event with no matching configuration was received from interface . This event\n            included the following parameters:\n            </p>',
			logMessage:
				'An event with no matching configuration was received from interface .',
			severity: 'MINOR',
			log: 'Y',
			display: 'Y',
			nodeId: 1,
			nodeLabel: 'localhost',
			location: 'Default'
		},
		parameters: [
			{
				name: 'situationId',
				value: 'b6384c97-74ec-4784-8212-c1d78af365cb',
				type: 'string'
			},
			{
				name: 'situationLogMsg',
				value:
					'An event with no matching configuration was received from interface .\n        ',
				type: 'string'
			},
			{
				name: 'situationDescr',
				value:
					'<p>An event with no matching configuration was received from interface . This event\n            included the following parameters:\n            </p>',
				type: 'string'
			},
			{
				name: 'related-reductionKey1',
				value: 'uei.org.opennms/interfaceMinorEvent140::1:',
				type: 'string'
			},
			{
				name: 'related-reductionKey2',
				value: 'uei.org.opennms/interfaceMinorEvent141::1:',
				type: 'string'
			},
			{
				name: 'situationStatus',
				value: 'ACCEPTED',
				type: 'string'
			}
		],
		lastEventTime: 1667329957084,
		managedObjectInstance: 'selfmonitor:1',
		managedObjectType: 'node',
		x733ProbableCause: 0,
		ifIndex: null,
		relatedAlarms: [
			{
				id: 605,
				type: 2,
				severity: 'CRITICAL',
				reductionKey: 'uei.org.opennms/interfaceMinorEvent140::1:',
				description:
					'<p>An event with no matching configuration was received from interface . This event\n            included the following parameters:\n            </p>',
				nodeLabel: 'localhost',
				logMessage:
					'An event with no matching configuration was received from interface .\n        '
			},
			{
				id: 606,
				type: 2,
				severity: 'MINOR',
				reductionKey: 'uei.org.opennms/interfaceMinorEvent141::1:',
				description:
					'<p>An event with no matching configuration was received from interface . This event\n            included the following parameters:\n            </p>',
				nodeLabel: 'localhost',
				logMessage:
					'An event with no matching configuration was received from interface .\n        '
			}
		],
		alarms: [
			{
				id: 606,
				uei: 'uei.org.opennms/interfaceMinorEvent141',
				location: 'Default',
				nodeId: 1,
				nodeLabel: 'localhost',
				reductionKey: 'uei.org.opennms/interfaceMinorEvent141::1:',
				type: 3,
				count: 1,
				severity: 'MINOR',
				firstEventTime: 1667228104454,
				description:
					'<p>An event with no matching configuration was received from interface . This event\n            included the following parameters:\n            </p>',
				logMessage:
					'An event with no matching configuration was received from interface .\n        ',
				suppressedUntil: 1667228104454,
				suppressedTime: 1667228104454,
				ackUser: 'admin',
				ackTime: 1667329957126,
				lastEvent: {
					id: 701,
					uei: 'uei.org.opennms/interfaceMinorEvent141',
					time: 1667228104454,
					source: 'KarafShell_send-event',
					parameters: [],
					createTime: 1667228104461,
					description:
						'<p>An event with no matching configuration was received from interface . This event\n            included the following parameters:\n            </p>',
					logMessage:
						'An event with no matching configuration was received from interface .\n        ',
					severity: 'MINOR',
					log: 'Y',
					display: 'Y',
					nodeId: 1,
					nodeLabel: 'localhost',
					location: 'Default'
				},
				parameters: [],
				lastEventTime: 1667228104454,
				managedObjectInstance: 'selfmonitor:1',
				managedObjectType: 'node',
				x733ProbableCause: 0,
				ifIndex: null,
				affectedNodeCount: 1
			},
			{
				id: 605,
				uei: 'uei.org.opennms/interfaceMinorEvent140',
				location: 'Default',
				nodeId: 1,
				nodeLabel: 'localhost',
				reductionKey: 'uei.org.opennms/interfaceMinorEvent140::1:',
				type: 3,
				count: 1,
				severity: 'CRITICAL',
				firstEventTime: 1667228102338,
				description:
					'<p>An event with no matching configuration was received from interface . This event\n            included the following parameters:\n            </p>',
				logMessage:
					'An event with no matching configuration was received from interface .\n        ',
				suppressedUntil: 1667228102338,
				suppressedTime: 1667228102338,
				ackUser: 'admin',
				ackTime: 1667329957091,
				lastEvent: {
					id: 700,
					uei: 'uei.org.opennms/interfaceMinorEvent140',
					time: 1667228102338,
					source: 'KarafShell_send-event',
					parameters: [],
					createTime: 1667228102344,
					description:
						'<p>An event with no matching configuration was received from interface . This event\n            included the following parameters:\n            </p>',
					logMessage:
						'An event with no matching configuration was received from interface .\n        ',
					severity: 'MINOR',
					log: 'Y',
					display: 'Y',
					nodeId: 1,
					nodeLabel: 'localhost',
					location: 'Default'
				},
				parameters: [],
				lastEventTime: 1667228102338,
				managedObjectInstance: 'selfmonitor:1',
				managedObjectType: 'node',
				x733ProbableCause: 0,
				ifIndex: null,
				affectedNodeCount: 1
			},
			{
				id: 607,
				uei: 'uei.org.opennms/interfaceMinorEvent140',
				location: 'Default',
				nodeId: 1,
				nodeLabel: 'localhost',
				reductionKey: 'uei.org.opennms/interfaceMinorEvent140::1:',
				type: 3,
				count: 1,
				severity: 'CRITICAL',
				firstEventTime: 1667228102338,
				description:
					'<p>An event with no matching configuration was received from interface . This event\n            included the following parameters:\n            </p>',
				logMessage:
					'An event with no matching configuration was received from interface .\n        ',
				suppressedUntil: 1667228102338,
				suppressedTime: 1667228102338,
				ackUser: 'admin',
				ackTime: 1667329957091,
				lastEvent: {
					id: 700,
					uei: 'uei.org.opennms/interfaceMinorEvent140',
					time: 1667228103338,
					source: 'KarafShell_send-event',
					parameters: [],
					createTime: 1667228102344,
					description:
						'<p>An event with no matching configuration was received from interface . This event\n            included the following parameters:\n            </p>',
					logMessage:
						'An event with no matching configuration was received from interface .\n        ',
					severity: 'MINOR',
					log: 'Y',
					display: 'Y',
					nodeId: 1,
					nodeLabel: 'localhost',
					location: 'Default'
				},
				parameters: [],
				lastEventTime: 1667228102338,
				managedObjectInstance: 'selfmonitor:1',
				managedObjectType: 'node',
				x733ProbableCause: 0,
				ifIndex: null,
				affectedNodeCount: 1
			}
		],
		affectedNodeCount: 1
	}
]
