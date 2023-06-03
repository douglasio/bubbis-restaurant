import type { IGatsbyImageData } from 'gatsby-plugin-image'
import type { WeekdayType } from 'utils'

export type AllContentfulMenuItem = {
	name: string
	price?: string
	description?: { description: string }
	image: { description: string; gatsbyImageData: IGatsbyImageData }
	id: string
}

export type AllContentfulMenu = {
	nodes: Array<{
		title: string
		id: string
		slug: string
		items: Array<AllContentfulMenuItem>
	}>
}

export type ContentfulGlobal = {
	name: string
	description: { description: string }
	addressText: {
		addressText: string
	}
	hours: {
		hours: string
	}
	hoursObject: {
		hours: Array<{ day: WeekdayType; startHour: number; endHour: number }>
	}
	phone: string
	facebook: string
	instagram: string
}

export type ContentfulHomepage = {
	heading: string
	heroImage: { description: string; gatsbyImageData: IGatsbyImageData }
	introText: {
		introText: string
	}
}
