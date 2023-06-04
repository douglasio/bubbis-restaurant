import type { IGatsbyImageData } from 'gatsby-plugin-image'
import type { WeekdayType } from 'utils'

export type AllContentfulMenuItem = {
	name: string
	price?: string
	description?: { description: string }
	image: { description: string; gatsbyImageData: IGatsbyImageData }
	id: string
	pronunciation: string
}

export type ContentfulMenu = {
	title: string
	id: string
	slug: string
	items: Array<AllContentfulMenuItem>
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
	email: string
	facebook: string
	instagram: string
}

export type ContentfulHomepage = {
	title: string
	heroImage: { description: string; gatsbyImageData: IGatsbyImageData }
	heroImages: Array<{ description: string; gatsbyImageData: IGatsbyImageData }>
	introText: {
		introText: string
	}
	menus: ContentfulMenu[]
}

export type ContentfulLocationPage = {
	title: string
	images: Array<{
		description: string
		gatsbyImageData: IGatsbyImageData
		id: string
	}>
}
