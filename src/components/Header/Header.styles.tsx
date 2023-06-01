import styled from 'styled-components/macro'
import { FontSize, FontFamily, FontWeight, Gutters } from 'styles'
import { Breakpoints, HeaderHeight } from 'styles'

const getTransition = (property: string) => `${property} ease-in 100ms`

export const Header = styled.header<{ $isSticky?: boolean }>`
	background-color: ${({ $isSticky, theme }) =>
		$isSticky
			? theme.header.background.sticky
			: theme.header.background.default};
	box-sizing: border-box;
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	height: ${({ $isSticky }) =>
		$isSticky ? HeaderHeight.mobileSticky : HeaderHeight.mobile};
	margin-bottom: 1rem;
	overflow-y: visible;
	padding: 0.5rem ${Gutters.mobile};
	position: sticky;
	top: 0;
	transition: ${getTransition('background-color')};
	transition-delay: 200ms;
	z-index: 2;

	@media screen and (min-width: ${Breakpoints.tablet}) {
		height: ${({ $isSticky }) =>
			$isSticky ? HeaderHeight.desktopSticky : HeaderHeight.desktop};
		padding: 1rem ${Gutters.desktop};
	}

	h1 {
		font-size: ${({ $isSticky }) =>
			$isSticky ? FontSize.base : FontSize.heading1};
		transition: ${getTransition('font-size')};

		a {
			color: unset;
			text-decoration: unset;
		}
	}

	p {
		font-size: ${FontSize.small};
		font-family: ${FontFamily.ysabeau};
		font-weight: ${FontWeight.light};
		height: ${({ $isSticky }) => ($isSticky ? 0 : 'auto')};
		opacity: ${({ $isSticky }) => ($isSticky ? 0 : 1)};
		transition: ${getTransition('opacity')};
	}

	.grid-area-1 {
		grid-area: 1 / 1 / 2 / 2;
	}
	.grid-area-2 {
		grid-area: 1 / 2 / 2 / 3;
	}
	.grid-area-3 {
		grid-area: 2 / 1 / 3 / 2;
	}
`
