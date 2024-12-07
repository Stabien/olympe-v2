export const formatDate = (date: Date) => {
	const day = String(date.getDate()).padStart(2, '0')
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const year = date.getFullYear()

	return `${day}/${month}/${year}`
}

export const getMillisecondsFromDays = (days: number) => {
	return days * 24 * 60 * 60 * 1000
}
