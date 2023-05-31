import styled from 'styled-components/macro'
import { FontSize, FontFamily, FontWeight } from 'styles'

const getTransition = (property: string) => `${property} ease-in 100ms`

export const headerHeight = '3.5rem'

export const Header = styled.header<{ $isSticky?: boolean }>`
	background-color: ${({ $isSticky, theme }) =>
		$isSticky
			? theme.header.background.sticky
			: theme.header.background.default};
	box-sizing: border-box;
	display: grid;
	grid-template-columns: 3fr 1fr;
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	height: ${({ $isSticky }) => ($isSticky ? headerHeight : 'auto')};
	margin-bottom: 1rem;
	overflow-y: visible;
	padding: 1rem;
	position: sticky;
	top: 0;
	transition: ${getTransition('background-color')};
	z-index: 1;

	h1 {
		font-size: ${({ $isSticky }) =>
			$isSticky ? FontSize.base : FontSize.heading1};
		transition: ${getTransition('font-size')};
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
