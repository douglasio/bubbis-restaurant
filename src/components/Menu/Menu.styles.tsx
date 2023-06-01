import styled from 'styled-components/macro'
import { FontSize, FontWeight, Gutters } from 'styles'
import { Breakpoints, HeaderHeight } from 'styles'

export const Menu = styled.section`
	margin: 1rem 0;
`

export const Title = styled.header<{ $isSticky: boolean }>`
	align-items: center;
	background-color: ${({ $isSticky, theme }) =>
		$isSticky
			? theme.menu.title.background.sticky
			: theme.menu.title.background.default};
	display: flex;
	flex-grow: 1;
	justify-content: space-between;
	margin-bottom: 1rem;
	padding: 0 ${Gutters.mobile} 0.5rem;
	position: sticky;
	top: ${HeaderHeight.mobileSticky};
	transition: background-color ease-in 100ms;
	white-space: nowrap;
	z-index: 1;

	@media screen and (min-width: ${Breakpoints.tablet}) {
		padding-left: ${Gutters.mobile};
		padding-right: ${Gutters.desktop};
		top: ${HeaderHeight.desktopSticky};
	}
`

export const MenuItem = styled.li<{ $hasImage: boolean }>`
	display: grid;
	grid-template-columns: fit-content(200px) 2fr auto;
	grid-template-rows: repeat(2, auto);
	grid-gap: 0.5rem 1rem;
	margin: 0.5rem 0;
	padding: 1rem 1rem;

	&:nth-of-type(odd) {
		background-color: ${({ theme }) => theme.menu.shadedRow};
	}

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
`
