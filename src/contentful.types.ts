export type AllContentfulMenuItem = {
	name?: string
	price?: string
	description?: { description: string }
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
	phone: string
	facebook: string
	instagram: string
}
