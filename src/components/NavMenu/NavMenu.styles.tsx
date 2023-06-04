import styled from 'styled-components'
import { Breakpoints, FontFamily, FontSize, Gutters } from 'styles'
import { SVG } from 'svgs'

type NavMenuStyleProps = {
	$isVisible: boolean
}

const TOGGLE_SIZE = '1.75rem'

export const Desktop = styled.div<{ $isSticky: boolean }>`
	display: none;
	position: absolute;
	right: ${Gutters.mobile};
	top: ${({ $isSticky }) => ($isSticky ? '50%' : '0.25rem')};
	transform: ${({ $isSticky }) => ($isSticky ? 'translateY(-50%)' : '0')};
	z-index: 4;

	.nav {
		display: grid;
		grid-auto-flow: column;
		grid-column-gap: 1rem;

		a {
			color: ${({ theme }) => theme.nav.desktop.link.default};
		}
	}

	@media screen and (min-width: ${Breakpoints.tablet}) {
		/* right: ${Gutters.tablet}; */
	}

	@media screen and (min-width: ${Breakpoints.desktop}) {
		display: block;
		right: ${Gutters.desktop};
	}

	@media screen and (min-width: ${Breakpoints.ultrawide}) {
		right: ${Gutters.ultrawide};
	}
`

export const Mobile = styled.div`
	position: absolute;
	right: ${Gutters.mobile};
	z-index: 4;

	@media screen and (min-width: ${Breakpoints.tablet}) {
		right: ${Gutters.tablet};
	}

	@media screen and (min-width: ${Breakpoints.desktop}) {
		display: none;
	}
`

export const Toggle = styled.button`
	align-items: stretch;
	background-color: ${({ theme }) => theme.nav.mobile.toggle.background};
	border: 0;
	color: ${({ theme }) => theme.nav.mobile.toggle.text};
	cursor: pointer;
	display: flex;
	height: ${TOGGLE_SIZE};
	position: absolute;
	right: 0;
	top: calc(${TOGGLE_SIZE} / 5);
	width: ${TOGGLE_SIZE};
	z-index: 5;

	// fontawesome icon
	> * {
		height: 100%;

		&.close {
			animation: spin 200ms forwards;
			transform: rotate(0);
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(-90deg);
		}
		100% {
			transform: rotate(0);
		}
	}
`

export const Shade = styled.div<NavMenuStyleProps>`
	background-color: ${({ theme }) => theme.nav.mobile.shade};
	height: 100%;
	left: 0;
	opacity: ${({ $isVisible }) => ($isVisible ? 0.7 : 0)};
	position: fixed;
	top: 0;
	transition: opacity 400ms;
	width: 100%;
	z-index: 4;
`

export const Dropdown = styled.div<NavMenuStyleProps>`
	align-content: space-between;
	background-color: ${({ theme }) => theme.nav.mobile.list.background};
	display: grid;
	grid-template-rows: min-content auto;
	height: 100vh;
	opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
	overflow: hidden;
	padding: calc(${TOGGLE_SIZE} + 2rem) 0 1rem;
	position: fixed;
	right: ${({ $isVisible }) => ($isVisible ? 0 : '-100%')};
	top: 0;
	transition: all 400ms;
	width: 80vw;
	z-index: 4;

	.nav {
		display: grid;
		font-size: ${FontSize.larger};
		grid-auto-flow: row;
		row-gap: 1rem;
		text-align: center;
		z-index: 1;

		a {
			color: ${({ theme }) => theme.nav.mobile.list.link.default.text};
			padding: 0.5rem 0;
			text-decoration: none;
			transition: background-color 150ms;

			&:hover {
				background-color: ${({ theme }) =>
		theme.nav.mobile.list.link.hover.background};
			}
		}
	}

	.nav-footer {
		font-family: ${FontFamily.playfair};
		font-size: ${FontSize.medium};
		text-align: center;
		z-index: 1;
	}
`

export const NavBackground = styled(SVG.Pomegranate)`
	bottom: -45vmin;
	fill: ${({ theme }) => theme.nav.mobile.backsplash};
	height: 75vmax;
	position: absolute;
	left: -3rem;
	transform: rotate(30deg);
	width: 100%;
	z-index: 0;
`
