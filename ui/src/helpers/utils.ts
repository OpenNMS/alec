import { format } from 'date-fns'
import CONST from '@/helpers/constants'
import { TAlarm, TSituation } from '@/types/TSituation'
import { isToday, isYesterday, isThisWeek } from 'date-fns'

const formatDate = (date: Date | string | number | undefined) => {
	let formattedDate = ''
	if (date) {
		try {
			formattedDate = format(new Date(date), CONST.DATE_FORMAT)
		} catch (e) {
			console.log('error date', date)
		}
	}
	return formattedDate
}

const truncateText = (text: string, length: number) => {
	const end = text.length > length ? '...' : ''
	return text.replace(/(<([^>]+)>)/gi, '').substring(0, length) + end
}

const filterListByDate = (
	selectedTimePeriod: number,
	list: (TAlarm | TSituation)[]
) => {
	let filtered = list
	switch (selectedTimePeriod) {
		case 2:
			filtered = filtered.filter((a: TAlarm | TSituation) =>
				isToday(a.firstEventTime)
			)
			break
		case 3:
			filtered = filtered.filter((a: TAlarm | TSituation) =>
				isYesterday(a.firstEventTime)
			)
			break
		case 4:
			filtered = filtered.filter((a: TAlarm | TSituation) =>
				isThisWeek(a.firstEventTime)
			)
			break
	}
	return filtered
}
export { formatDate, truncateText, filterListByDate }
