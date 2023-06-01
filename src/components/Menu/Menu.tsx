import React, { Fragment, useRef, type ReactNode } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStickyObserver } from 'hooks'
import type { AllContentfulMenuItem } from 'contentful.types'
import * as Styled from './Menu.styles'
import { JumpTo } from 'components/JumpTo'

type MenuProps = {
	id: string
	children?: ReactNode
	slug?: string
	items: AllContentfulMenuItem[]
	title: string
}

export const Menu = ({ title, slug, items }: MenuProps) => {
	const sentinelRef = useRef<HTMLDivElement>(null)
	const { isSticky } = useStickyObserver(sentinelRef, [0.1, 1])

	return (
		<Styled.Menu id={slug}>
			<div ref={sentinelRef} style={{ transform: 'translateY(-3.5rem)' }} />
			<Styled.Title $isSticky={isSticky}>
				<h3>{title}</h3>
			</Styled.Title>
			<ul>
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
									<div className="description">{description?.description}</div>
								)}
							</Styled.MenuItem>
						</Fragment>
					)
				})}
			</ul>
		</Styled.Menu>
	)
}
