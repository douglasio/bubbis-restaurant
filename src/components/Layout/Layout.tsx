import { graphql, useStaticQuery } from 'gatsby'
import React, { useState, useRef, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { theme, GlobalStyle } from 'styles'
import * as Styled from './Layout.styles'
import { useStickyObserver } from 'hooks'

type LayoutProps = {
	children: React.ReactNode
	theme: keyof typeof theme
}

export const Layout: React.FC<LayoutProps> = (props) => {
	const sentinelRef = useRef<HTMLDivElement>(null)
	const { isSticky } = useStickyObserver(sentinelRef)

	const data = useStaticQuery(graphql`
		query LayoutQuery {
			contentfulGlobal {
				name
				description {
					description
				}
				phone
				facebook
				instagram
			}
		}
	`)

	const {
		name,
		description: { description },
		phone,
		facebook,
		instagram,
	} = data.contentfulGlobal

	console.log(isSticky)

	return (
		<ThemeProvider theme={theme[props.theme]}>
			<GlobalStyle theme={theme[props.theme]} />
			<Styled.Header $isSticky={isSticky}>
				<h1>{name}</h1>
				<p>{description}</p>
			</Styled.Header>
			<div id="stickySentinel" ref={sentinelRef}></div>
			{props.children}
			<Styled.Footer>
				<h3>{name}</h3>
				<p>
					<a className="icon" href={`tel:${phone}`}>
						<FontAwesomeIcon icon={faPhone} />
					</a>
					<a href={`tel:${phone}`}>{phone}</a>
				</p>
				<p>
					<a
						className="icon"
						href={facebook}
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faFacebook} />
					</a>
					<a href={facebook} target="_blank" rel="noopener noreferrer">
						Facebook
					</a>
				</p>
				<p>
					<a
						className="icon"
						href={instagram}
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a href={instagram} target="_blank" rel="noopener noreferrer">
						Instagram
					</a>
				</p>
			</Styled.Footer>
		</ThemeProvider>
	)
}
