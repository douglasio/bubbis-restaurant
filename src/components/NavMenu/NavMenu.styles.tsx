import styled from 'styled-components'
import { Breakpoints, FontFamily, FontSize, Gutters, theme } from 'styles'

type NavMenuStyleProps = {
	$isVisible: boolean
}

const TOGGLE_SIZE = '2rem'

export const Desktop = styled.nav`
	display: none;
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	z-index: 4;

	@media screen and (min-width: ${Breakpoints.desktop}) {
		display: block;
	}
`

export const Mobile = styled.div`
	position: absolute;
	right: ${Gutters.mobile};
	top: 1rem;
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
	background-color: black;
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
	}
`
