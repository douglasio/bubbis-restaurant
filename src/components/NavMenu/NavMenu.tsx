import React, { ReactNode, useState } from 'react'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMountTransition } from 'hooks'
import { SVG } from 'svgs'
import * as Styled from './NavMenu.styles'

type NavMenuProps = {
	children: ReactNode
}

export const NavMenu = ({ children }: NavMenuProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const { hasTransitionedIn } = useMountTransition(isOpen, 500)

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<Styled.Desktop>Desktop {children}</Styled.Desktop>
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
								<SVG.Pomegranate className="section-heading-svg" />
								<nav className="nav">{children}</nav>
								<footer className="nav-footer">Pomegranate</footer>
							</Styled.Dropdown>
						</>
					)}
				</div>
			</Styled.Mobile>
		</>
	)
}
