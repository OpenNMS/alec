import { format } from 'date-fns'
import CONST from '@/helpers/constants'

const formatDate = (date: Date | string | number) => {
	let formattedDate = ''
	try {
		formattedDate = format(new Date(date), CONST.DATE_FORMAT)
	} catch (e) {
		console.log('error date', date)
	}
	return formattedDate
}

export { formatDate }
