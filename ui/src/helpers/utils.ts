import { format } from 'date-fns'
import CONST from '@/helpers/constants'

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
	return text.replace(/(<([^>]+)>)/gi, '').substring(0, length) + '...'
}

export { formatDate, truncateText }
