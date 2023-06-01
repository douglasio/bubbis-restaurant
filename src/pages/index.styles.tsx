import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Breakpoints, Gutters, HeaderHeight } from 'styles'

export const IndexPage = styled.main`
	// background-color: ${({ theme }) => theme.global.background.dark};
`

export const Section = styled.section`
	margin: 3rem 0;

	&:first-of-type {
		margin-top: -${HeaderHeight.mobile};
	}

	&.intro {
		height: 100vh;
		overflow: hidden;
		padding-top: ${HeaderHeight.mobile};
		position: relative;
		width: 100vw;
	}

	h2 {
		margin-bottom: 1rem;
		padding: 0 ${Gutters.mobile};
		z-index: 1;
	}

	@media screen and (min-width: ${Breakpoints.tablet}) {
		&:first-of-type {
			margin-top: -${HeaderHeight.desktop};
			padding-top: ${HeaderHeight.desktop};
		}
	}
`

export const Intro = styled.div`
	padding: ${Gutters.mobile};
	position: absolute;
	text-align: center;
	top: ${HeaderHeight.mobile};
	width: 100%;
	z-index: 1;

	nav > a {
		display: block;
	}

	@media screen and (min-width: ${Breakpoints.tablet}) {
		top: ${HeaderHeight.desktop};
	}
`

export const HeroImage = styled(GatsbyImage)`
	filter: brightness(0.8);
	height: 101%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 0;
`

export const DownArrow = styled.a`
	bottom: 15vh;
	color: ${({ theme }) => theme.homepage.intro.downArrow.default};
	left: 50%;
	position: absolute;
	transform: translateX(-50%);
	width: 3rem;

	&:hover {
		color: ${({ theme }) => theme.homepage.intro.downArrow.hover};
	}

	> * {
		height: auto;
		width: 100%;
	}
`
