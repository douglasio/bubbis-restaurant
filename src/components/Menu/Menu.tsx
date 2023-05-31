import React, { type ReactNode } from 'react'
import type { AllContentfulMenuItem } from 'contentful.types'
import * as Styled from './Menu.styles'

type MenuProps = {
	id: string
	children?: ReactNode
	slug?: string
	items: AllContentfulMenuItem[]
	title: string
}

export const Menu = ({ title, slug, items }: MenuProps) => {
	return (
		<Styled.Menu id={slug}>
			<Styled.Title>{title}</Styled.Title>
			<ul>
				{items?.map(({ id, name, price, description }) => {
					return (
						<Styled.MenuItem key={id}>
							<Styled.MenuItemName>{name}</Styled.MenuItemName>
							<Styled.MenuItemPrice>{price}</Styled.MenuItemPrice>
							{description && (
								<Styled.MenuItemDescription>
									{description?.description}
								</Styled.MenuItemDescription>
							)}
						</Styled.MenuItem>
					)
				})}
			</ul>
		</Styled.Menu>
	)
}
