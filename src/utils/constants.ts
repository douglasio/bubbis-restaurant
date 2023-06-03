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
