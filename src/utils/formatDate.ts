import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relative from 'dayjs/plugin/relativeTime'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relative)

const formatDate = (dateString: string, format: string) => {
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
	return dayjs.utc(dateString).tz(timeZone).format(format)
}

export default formatDate
