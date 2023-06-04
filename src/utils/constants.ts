export const GOOGLE_MAPS_LINKS = {
	directions: 'https://goo.gl/maps/fuGYR31Qhmizkamm6',
	map: 'https://maps.google.com/maps?ll=32.755576,-117.139688&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=1828045261711725552',
	embeddedMap:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.382627393861!2d-117.14226272297049!3d32.755580385078844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954e4965010eb%3A0x195e857ae9a9d3f0!2sPomegranate!5e0!3m2!1sen!2sus!4v1685830887152!5m2!1sen!2sus',
}

export const WEEKDAY = [
	'sunday',
	'monday',
	'tuesday',
	'wednesday',
	'thursday',
	'friday',
	'saturday',
] as const

export type WeekdayType = (typeof WEEKDAY)[number]

export const WORLD_TIME_API_PST =
	'http://worldtimeapi.org/api/timezone/America/Vancouver'
