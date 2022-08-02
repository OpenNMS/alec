export const simplifyDate = (value: string | Date) => {
	const date = new Date(value)
	return `${
		date.getMonth() + 1
	}/${date.getDate()} ${date.getUTCHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
