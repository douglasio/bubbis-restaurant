import styled from 'styled-components/macro'
import { FontSize, FontWeight, Gutters } from 'styles'
import { Breakpoints, HeaderHeight } from 'styles'

const MENU_GUTTERS = {
	mobile: Gutters.mobile,
	tablet: `calc(${Gutters.tablet} + 10rem)`,
}

export const Menu = styled.div``

export const MenuSection = styled.section`
	margin-top: 2rem;

	@media screen and (min-width: ${Breakpoints.desktop}) {
		&:nth-of-type(n + 2) {
			margin-top: 4rem;
		}
	}
`

export const Title = styled.header<{ $isSticky: boolean }>`
	align-items: center;
	background-color: ${({ $isSticky, theme }) =>
		$isSticky
			? theme.menu.title.background.sticky
			: theme.menu.title.background.default};
	color: ${({ $isSticky, theme }) =>
		$isSticky ? theme.menu.title.text.sticky : theme.menu.title.text.default};
	margin-bottom: 1rem;
	padding: 0 ${MENU_GUTTERS.mobile} 0.5rem;
	position: sticky;
	text-transform: uppercase;
	top: ${HeaderHeight.mobileSticky};
	transition: all ease-in 100ms;
	white-space: nowrap;
	z-index: 1;

	@media screen and (min-width: ${Breakpoints.tablet}) {
		padding-left: ${Gutters.tablet};
		padding-right: ${Gutters.tablet};
		top: ${HeaderHeight.desktopSticky};
	}

	@media screen and (min-width: ${Breakpoints.desktop}) {
		padding-left: ${Gutters.desktop};
		padding-right: ${Gutters.desktop};
	}
`

export const List = styled.ul`
	display: grid;
	grid-auto-flow: row;
	grid-row-gap: 1rem;

	@media screen and (min-width: ${Breakpoints.tablet}) {
		grid-template-columns: 1fr 1fr;
		grid-row-gap: 0;
	}
`

export const MenuItem = styled.li<{ $hasImage: boolean }>`
	display: grid;
	grid-template-columns: fit-content(200px) 2fr auto;
	grid-template-rows: repeat(2, auto);
	grid-template-areas: 'name image price description';
	grid-gap: 0.5rem 1rem;
	padding: 1rem ${MENU_GUTTERS.mobile};

	> * {
		display: block;
	}

	.name {
		font-size: ${FontSize.medium};
		font-weight: ${FontWeight.bold};
		grid-area: ${({ $hasImage }) =>
			$hasImage ? '1 / 2 / 2 / 3' : '1 / 1 / 2 / 3'};
	}

	.image {
		grid-area: 1 / 1 / 4 / 2;
	}

	.price {
		font-size: ${FontSize.medium};
		font-weight: ${FontWeight.black};
		grid-area: 1 / 3 / 3 / 4;
	}

	.description {
		grid-area: ${({ $hasImage }) =>
			$hasImage ? '2 / 2 / 3 / 3' : '2 / 1 / 3 / 3'};
	}

	@media screen and (max-width: ${Breakpoints.tablet}) {
		&:nth-of-type(odd) {
			background-color: ${({ theme }) => theme.menu.shadedRow};
		}
	}

	@media screen and (min-width: ${Breakpoints.tablet}) {
		padding: 1rem ${Gutters.tablet} 1rem ${Gutters.tablet};

		&:nth-of-type(odd) {
			grid-column: 1;
			border-right: ${({ theme }) => `1px solid ${theme.menu.divider}`};
		}

		&:nth-of-type(even) {
			grid-column: 2;
		}
	}

	@media screen and (min-width: ${Breakpoints.desktop}) {
		padding-left: ${Gutters.desktop};
		padding-right: ${Gutters.desktop};
	}
`
