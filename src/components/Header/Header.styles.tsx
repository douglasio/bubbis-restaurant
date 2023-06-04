import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components/macro'
import { FontSize, FontFamily, FontWeight, Gutters } from 'styles'
import { Breakpoints, HeaderHeight } from 'styles'

const getTransition = (property: string | string[]) => {
	if (typeof property === 'string') {
		return `${property} ease-in 150ms`
	} else {
		return property.map((p) => `${p} ease-in 150ms`).join(' ')
	}
}

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
	overflow-x: hidden;
	overflow-y: visible;
	/* padding: 0.5rem ${Gutters.mobile}; */
	position: sticky;
	top: 0;
	transition: ${getTransition('all')};
	z-index: 2;

	.wordmark {
		font-size: ${({ $isSticky }) =>
			$isSticky ? FontSize.base : FontSize.hero1};
		transition: ${getTransition('font-size')};
		white-space: nowrap;

		a {
			color: unset;
			position: relative;
			text-decoration: unset;
			z-index: 1;
		}

		svg {
			opacity: ${({ $isSticky }) => ($isSticky ? '0.5' : '0.7')};
			position: absolute;
			right: -0.6em;
			height: 1.25em;
			transform: rotate(5deg);
			width: 1.25em;
			z-index: 0;
		}
	}

	p {
		font-size: ${FontSize.hero2};
		font-family: ${FontFamily.ysabeau};
		font-weight: ${FontWeight.medium};
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

	@media screen and (min-width: ${Breakpoints.tablet}) {
		height: ${({ $isSticky }) =>
			$isSticky ? HeaderHeight.desktopSticky : HeaderHeight.desktop};
		padding: 1rem ${Gutters.tablet};

		.wordmark {
			font-size: ${({ $isSticky }) =>
				$isSticky ? FontSize.base : FontSize.hero1};
		}

		p {
			font-size: ${({ $isSticky }) =>
				$isSticky ? FontSize.small : FontSize.hero2};
		}
	}

	@media screen and (min-width: ${Breakpoints.desktop}) {
		padding-left: ${Gutters.desktop};
		padding-right: ${Gutters.desktop};
	}
`

export const HeroImage = styled(GatsbyImage)<{ $isSticky?: boolean }>`
	filter: brightness(0.6);
	height: 100%;
	left: 0;
	opacity: ${({ $isSticky }) => ($isSticky ? 0 : 1)};
	position: absolute;
	transition: ${getTransition('opacity')};
	width: 100%;
	z-index: 0;
`

export const Content = styled.div`
	left: ${Gutters.mobile};
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: calc(100% - ${Gutters.mobile});

	@media screen and (min-width: ${Breakpoints.tablet}) {
		left: ${Gutters.tablet};
		width: calc(100% - ${Gutters.tablet});
	}

	@media screen and (min-width: ${Breakpoints.desktop}) {
		left: ${Gutters.desktop};
		width: calc(100% - ${Gutters.desktop});
	}
`
