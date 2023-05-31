import React, { type ReactNode } from 'react'
import type { AllContentfulMenuItem } from 'components/Menu/types'

type MenuProps = {
	id: string
	children?: ReactNode
	slug?: string
	items: AllContentfulMenuItem[]
	title: string
}

export const Menu = ({ title, items }: MenuProps) => {
	return (
		<section>
			<h2>{title}</h2>
			<ul>
				{items.map(({ name, price }) => {
					return (
						<li>
							{name} - {price}
						</li>
					)
				})}
			</ul>
		</section>
	)
}
