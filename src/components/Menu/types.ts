export type AllContentfulMenuItem = {
	name?: string
	price?: string
}

export type AllContentfulMenu = {
	nodes: Array<{
		title: string
		id: string
		slug: string
		items: Array<AllContentfulMenuItem>
	}>
}
