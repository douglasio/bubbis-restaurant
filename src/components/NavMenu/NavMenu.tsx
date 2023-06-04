import React, { useState } from 'react'
import { Link } from 'gatsby'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMountTransition } from 'hooks'
import * as Styled from './NavMenu.styles'

type NavMenuProps = {
	isSticky: boolean
}

export const NavMenu = ({ isSticky }: NavMenuProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const { hasTransitionedIn } = useMountTransition(isOpen, 500)

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<Styled.Desktop $isSticky={isSticky}>
				<nav className="nav">
					<Link to="/">Home</Link>
					<Link to="/#menu">Menu</Link>
					<Link to="/location">Location</Link>
				</nav>
			</Styled.Desktop>
			<Styled.Mobile>
				<Styled.Toggle
					aria-controls="mobileNavList"
					className="plain"
					onClick={handleToggle}
					title={isOpen ? 'close nav' : 'open nav'}
				>
					{isOpen ? (
						<FontAwesomeIcon className="close" icon={faClose} />
					) : (
						<FontAwesomeIcon icon={faBars} />
					)}
				</Styled.Toggle>
				<div aria-hidden={!isOpen} id="mobileNavList">
					{(hasTransitionedIn || isOpen) && (
						<>
							<Styled.Shade $isVisible={hasTransitionedIn && isOpen} />
							<Styled.Dropdown $isVisible={hasTransitionedIn && isOpen}>
								<nav className="nav">
									<Link to="/">Home</Link>
									<Link to="/#menu">Menu</Link>
									<Link to="/location">Location</Link>
								</nav>
								<footer className="nav-footer">Pomegranate</footer>
								<Styled.NavBackground />
							</Styled.Dropdown>
						</>
					)}
				</div>
			</Styled.Mobile>
		</>
	)
}
