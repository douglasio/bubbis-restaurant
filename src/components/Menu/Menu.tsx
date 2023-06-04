import React, { Fragment, useRef, type ReactNode } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStickyObserver } from 'hooks'
import type { AllContentfulMenuItem, ContentfulMenu } from 'contentful.types'
import * as Styled from './Menu.styles'
import Markdown from 'markdown-to-jsx'

type MenuProps = {
	menus: ContentfulMenu[]
}

type MenuSectionProps = ContentfulMenu

const MenuSection = ({ title, slug, items }: MenuSectionProps) => {
	const sentinelRef = useRef<HTMLDivElement>(null)
	const { isSticky } = useStickyObserver(sentinelRef, [0.1, 1])

	return (
		<Styled.MenuSection id={slug}>
			<div ref={sentinelRef} style={{ transform: 'translateY(-3.5rem)' }} />
			<Styled.Title $isSticky={isSticky}>
				<h3>{title}</h3>
			</Styled.Title>
			<Styled.List>
				{items?.map(({ id, name, price, description, image }) => {
					return (
						<Fragment key={id}>
							<Styled.MenuItem $hasImage={!!image} key={id}>
								{image && (
									<div className="image">
										<GatsbyImage
											alt={image.description ?? name}
											image={getImage(image)!}
										/>
									</div>
								)}
								<div className="name">{name}</div>
								<div className="price">{price}</div>
								{description && (
									<div className="description">
										<Markdown>{description.description}</Markdown>
									</div>
								)}
							</Styled.MenuItem>
						</Fragment>
					)
				})}
			</Styled.List>
		</Styled.MenuSection>
	)
}

export const Menu = ({ menus }: MenuProps) => {
	return (
		<Styled.Menu>
			{menus.map((menu) => (
				<MenuSection key={menu.id} {...menu} />
			))}
		</Styled.Menu>
	)
}
