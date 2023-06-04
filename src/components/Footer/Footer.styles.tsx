import styled from 'styled-components'
import { Breakpoints, FontFamily, FontSize, Gutters } from 'styles'

export const Footer = styled.footer`
	background-color: ${({ theme }) => theme.footer.background};
	padding: 1rem ${Gutters.mobile} 2rem;

	h3 {
		font-family: ${FontFamily.playfair};
		font-size: ${FontSize.base};
		margin: 1rem 0;
	}

	ul {
		list-style-type: none;

		li {
			margin: 0.5rem 0;
		}
	}

	.icon {
		margin-right: 0.5rem;
	}

	@media screen and (min-width: ${Breakpoints.tablet}) {
		padding-left: ${Gutters.tablet};
	}

	@media screen and (min-width: ${Breakpoints.desktop}) {
		padding-left: ${Gutters.desktop};
	}

	@media screen and (min-width: ${Breakpoints.ultrawide}) {
		padding-left: ${Gutters.ultrawide};
	}

	@media screen and (min-width: ${Breakpoints.ultrawide}) {
		padding-left: ${Gutters.ultrawide};
	}
`

export const FooterGrid = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-gap: 1rem;

	@media screen and (min-width: ${Breakpoints.tablet}) {
		align-items: start;
		grid-auto-flow: column;
		justify-items: start;
	}
`
