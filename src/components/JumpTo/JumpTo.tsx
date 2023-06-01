import React, { useState } from 'react'
import { useMountTransition } from 'hooks'
import * as Styled from './JumpTo.styles'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faSquareCaretDown } from '@fortawesome/free-regular-svg-icons'

type NavProps = {
	isOpen: boolean
}

// todo: reuse AllContentfulMenu type
type ContentfulMenus = {
	allContentfulMenu: {
		nodes: Array<{
			title: string
			slug: string
			id: string
		}>
	}
}

const Nav = ({ isOpen }: NavProps) => {
	const { hasTransitionedIn } = useMountTransition(isOpen, 500)
	const data = useStaticQuery<ContentfulMenus>(graphql`
		query contentfulMenus {
			allContentfulMenu {
				nodes {
					title
					slug
					id
				}
			}
		}
	`)

	const menus = data.allContentfulMenu.nodes

	return hasTransitionedIn || isOpen ? (
		<Styled.Nav $visible={hasTransitionedIn && isOpen}>
			{menus.map(({ title, slug, id }) => {
				return (
					<a key={id} href={`#${slug}`} target="_self">
						{title}
					</a>
				)
			})}
		</Styled.Nav>
	) : (
		<></>
	)
}

type JumpToProps = {
	className?: string
}

export const JumpTo = ({ className }: JumpToProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const handleClick = () => setIsOpen(!isOpen)

	return (
		<>
			<Styled.JumpToWrapper className={className}>
				<Styled.Button
					onClick={handleClick}
					type="button"
					aria-controls="jumpMenu"
					$isOpen={isOpen}
				>
					Jump To
					<FontAwesomeIcon className="icon" icon={faAngleLeft} />
				</Styled.Button>
			</Styled.JumpToWrapper>
			<Styled.NavWrapper aria-hidden={!isOpen} id="jumpMenu">
				<Nav isOpen={isOpen} />
			</Styled.NavWrapper>
		</>
	)
}
