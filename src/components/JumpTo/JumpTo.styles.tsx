import styled from 'styled-components'
import { FontSize, Gutters } from 'styles'
import { Breakpoints } from 'styles/breakpoints'

export const JumpToWrapper = styled.div`
	display: block;
	right: 10%;
	position: fixed;
	top: 0;
	z-index: 3;
`

export const Button = styled.button<{ $isOpen: boolean }>`
	background-color: ${({ $isOpen, theme }) =>
		$isOpen
			? theme.global.content.button.background.active
			: theme.global.content.button.background.default};
	font-size: ${FontSize.smaller};
	position: relative;

	.icon {
		margin-left: 0.5em;
		transform: ${({ $isOpen }) => ($isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
		transition: transform ease-in 200ms;
	}

	@media screen and (min-width: ${Breakpoints.tablet}) {
		margin-top: 0.5rem;
	}
`

export const NavWrapper = styled.div`
	height: auto;
	position: absolute;
	top: 3rem;
	width: 7rem;
`

export const Nav = styled.nav<{
	$visible: boolean
}>`
	background-color: ${({ theme }) => theme.header.jumpTo.nav.background};
	height: 100%;
	opacity: ${({ $visible }) => ($visible ? 1 : 0)};
	padding: 0 ${Gutters.mobile};
	position: fixed;
	transition: all ease-in 100ms;
	width: 100%;

	a {
		display: block;
	}

	@media screen and (min-width: ${Breakpoints.tablet}) {
		position: absolute;
	}
`
