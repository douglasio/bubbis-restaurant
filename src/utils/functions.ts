import { ContentfulGlobal } from 'contentful.types'
import { WEEKDAY } from 'utils'

export function areWeOpen(
	schedule: ContentfulGlobal['hoursObject'],
	localTime: Date
): boolean {
	const currentTime: Date = new Date(),
		currentDay: number = currentTime.getDay(),
		currentHour: number = currentTime.getHours()
	let isOpen = false

	console.log(currentTime.getTimezoneOffset())

	fetch('http://worldtimeapi.org/api/timezone/America/Argentina/Salta')

	schedule.hours.forEach(({ day, startHour, endHour }) => {
		if (day === WEEKDAY[currentDay]) {
			if (currentHour > startHour && currentHour < endHour) {
				console.log('open!')
			}
		}
	})

	return isOpen
}
