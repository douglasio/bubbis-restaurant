import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import {
	Breakpoints,
	FontSize,
	FontWeight,
	Gutters,
	HeaderHeight,
} from 'styles'

export const Section = styled.section`
	&:first-of-type {
		margin-top: -${HeaderHeight.mobile};
	}

	&.intro {
		padding-top: ${HeaderHeight.mobile};
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
		&:first-of-type {
			padding-top: ${HeaderHeight.desktop};
		}

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

export const Intro = styled.div`
	padding: ${Gutters.mobile};
	/* position: absolute; */
	text-align: center;
	/* top: ${HeaderHeight.mobile}; */
	/* width: 100%; */
	/* z-index: 1; */

	.intro-nav {
		align-items: stretch;
		display: grid;
		grid-auto-flow: row;
		grid-auto-columns: 1fr;
		grid-auto-rows: 1fr;
		grid-row-gap: 1rem;
		justify-content: space-between;
		margin: 2rem auto;
		width: 50%;

		> a {
			display: grid;
			font-size: ${FontSize.large};
			font-weight: ${FontWeight.bold};
			line-height: 1em;
			padding: 1.5rem 2rem;
			place-content: center;
			text-decoration: none;
		}
	}

	.intro-text {
		font-size: ${FontSize.hero3};
		line-height: 1.1em;
	}

	@media screen and (min-width: ${Breakpoints.tablet}) {
		padding-left: ${Gutters.tablet};
		padding-right: ${Gutters.tablet};
		top: ${HeaderHeight.desktop};

		.intro-nav {
			grid-auto-flow: column;
			grid-auto-columns: 1fr;
			grid-template-rows: 1fr;
			grid-column-gap: 1rem;
		}
	}

	@media screen and (min-width: ${Breakpoints.desktop}) {
		padding-left: ${Gutters.desktop};
		padding-right: ${Gutters.desktop};
	}
`
