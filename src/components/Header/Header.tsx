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
	const { isSticky } = useStickyObserver(sentinelRef, [0])

	const { heroImage } = data.contentfulHomepage

	return (
		<>
			<Styled.Header $isSticky={isSticky}>
				{heroImage && (
					<Styled.HeroImage
						alt={heroImage.description}
						draggable={false}
						image={getImage(heroImage)!}
						$isSticky={isSticky}
					/>
				)}
				<Styled.Content>
					<h1 className="grid-area-1">
						<a className="plain" href="#top" target="_self">
							{name}{' '}
							<SVG.Pomegranate
								height="0.8em"
								fill={Color.white}
								width="0.8em"
							/>
						</a>
					</h1>
					<p className="grid-area-3">{description.toString()}</p>
				</Styled.Content>
				<NavMenu>
					<Link to="/">Home</Link>
					<Link to="/#menu">Menu</Link>
					<Link to="/location">Location</Link>
				</NavMenu>
			</Styled.Header>
			<div id="stickySentinel" ref={sentinelRef}></div>
		</>
	)
}
