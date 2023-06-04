import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components/macro'
import {
	Breakpoints,
	FontSize,
	FontWeight,
	Gutters,
	HeaderHeight,
} from 'styles'

export const Section = styled.section`
	&:first-of-type {
		margin-top: 1rem;
	}

	h1 {
		text-align: center;
	}

	h2 {
		margin-bottom: 1rem;
		padding: 0 ${Gutters.mobile};
		text-align: center;
		z-index: 1;
	}

	.section-heading-svg {
		margin-left: -1em;
		margin-right: 0.2em;
		transform: translateY(5px);
	}

	@media screen and (min-width: ${Breakpoints.tablet}) {
		h2 {
			padding-left: ${Gutters.tablet};
			padding-right: ${Gutters.tablet};
		}
	}

	@media screen and (min-width: ${Breakpoints.desktop}) {
		h2 {
			padding-left: ${Gutters.desktop};
			padding-right: ${Gutters.desktop};
		}
	}
`

export const Subsection = styled.div`
	padding: 1rem ${Gutters.mobile};

	h2 {
		padding: 1rem 0;
		text-align: left;
	}

	@media screen and (min-width: ${Breakpoints.tablet}) {
		padding-left: ${Gutters.tablet};
		padding-right: ${Gutters.tablet};
	}

	@media screen and (min-width: ${Breakpoints.desktop}) {
		padding-left: ${Gutters.desktop};
		padding-right: ${Gutters.desktop};
	}
`

export const DesktopIntro = styled.div`
	display: none;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 2rem;
	padding: 2rem ${Gutters.mobile} 2rem;

	.intro-box {
		align-content: center;
		background-color: ${({ theme }) =>
			theme.homepage.intro.box.default.background};
		display: grid;
		padding: 1rem;
		text-align: center;
	}

	.intro-box--feature,
	.intro-box--feature p {
		font-size: ${FontSize.hero3};
		font-weight: ${FontWeight.light};
		line-height: 1.1em;
	}

	.intro-box--feature {
		background-color: ${({ theme }) =>
			theme.homepage.intro.box.featured.background};
		padding: 0;
	}

	@media screen and (min-width: ${Breakpoints.tablet}) {
		display: grid;
		margin: 0 auto 2rem;
		padding-left: ${Gutters.tablet};
		padding-right: ${Gutters.tablet};
		top: ${HeaderHeight.desktop};
	}

	@media screen and (min-width: ${Breakpoints.desktop}) {
		max-width: ${Breakpoints.ultrawide};
		padding-left: ${Gutters.desktop};
		padding-right: ${Gutters.desktop};
	}
`

export const MobileIntro = styled.div`
	margin: 2rem auto;
	text-align: center;
	width: 75%;

	> a {
		display: grid;
		font-size: ${FontSize.large};
		font-weight: ${FontWeight.bold};
		line-height: 1em;
		padding: 1.5rem 2rem;
		place-content: center;
		text-decoration: none;
	}

	@media screen and (min-width: ${Breakpoints.tablet}) {
		display: none;
		padding-left: ${Gutters.tablet};
		padding-right: ${Gutters.tablet};
		top: ${HeaderHeight.desktop};
		width: 50%;

		.intro-nav {
			grid-auto-flow: column;
			grid-auto-columns: 1fr;
			grid-template-rows: 1fr;
			grid-column-gap: 1rem;
		}
	}
`
