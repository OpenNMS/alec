import { rest } from './axiosInstances'

export const sendAcknowledge = async (alarmId: number, isAck: boolean) => {
	try {
		const resp = await rest.put(
			`/alarms/${alarmId}?ack=${isAck}`,
			{
				body: `alarm=${alarmId}`
			},
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}
		)
		if (resp.status === 204) {
			return true
		}
		return false
	} catch (err) {
		return false
	}
}

export const sendAction = async (
	alarmId: number,
	action: 'clear' | 'escalate'
) => {
	try {
		const resp = await rest.put(
			`/alarms/${alarmId}?${action}=true`,
			{
				body: `alarm=${alarmId}`
			},
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}
		)
		if (resp.status === 302) {
			return true
		}
		return false
	} catch (err) {
		return false
	}
}
