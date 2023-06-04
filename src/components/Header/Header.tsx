import React, { useRef } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { useStickyObserver } from 'hooks'
import { NavMenu } from 'components'
import { SVG } from 'svgs'
import { Color } from 'styles'
import { ContentfulGlobal } from 'contentful.types'
import * as Styled from './Header.styles'
import { HeaderSize } from 'components/Header/types'

type HeaderProps = {
	name: ContentfulGlobal['name']
	description: ContentfulGlobal['description']
	size?: HeaderSize
}

export const Header = ({ name, description, size }: HeaderProps) => {
	const data = useStaticQuery(graphql`
		query headerQuery {
			contentfulHomepage {
				heroImage {
					description
					gatsbyImageData(
						layout: FULL_WIDTH
						placeholder: TRACED_SVG
						resizingBehavior: FILL
					)
				}
			}
		}
	`)
	const sentinelRef = useRef<HTMLDivElement>(null)
	const { isSticky: isStickyObserver } = useStickyObserver(sentinelRef, [0])

	const { heroImage } = data.contentfulHomepage

	const isSticky = isStickyObserver || size === 'sticky'

	return (
		<>
			<Styled.Header
				className={isSticky ? 'sticky' : 'default'}
				$isSticky={isSticky}
			>
				{heroImage && (
					<Styled.HeroImage
						alt={heroImage.description}
						draggable={false}
						image={getImage(heroImage)!}
						$isSticky={isSticky}
					/>
				)}
				<Styled.Content>
					<div className="grid-area-1 wordmark">
						<Link className="plain" to="/#top" target="_self">
							{name}{' '}
							<SVG.Pomegranate
								height="0.8em"
								fill={Color.white}
								width="0.8em"
							/>
						</Link>
					</div>
					<p className="grid-area-3">{description.toString()}</p>
				</Styled.Content>
				<NavMenu isSticky={isSticky} />
			</Styled.Header>
			<div id="stickySentinel" ref={sentinelRef}></div>
		</>
	)
}
