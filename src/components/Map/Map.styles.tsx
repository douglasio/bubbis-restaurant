import styled from 'styled-components'
import { FontWeight } from 'styles'

export const Wrapper = styled.figure`
	display: inline-block;
	background-color: ${({ theme }) => theme.map.background};
	margin: 1rem 0;
	padding: 1rem;

	figcaption {
		text-align: right;
		a {
			font-weight: ${FontWeight.bold};

			svg {
				margin-left: 0.2rem;
				transform: translateY(1px);
			}
		}
	}
`

export const Map = styled.iframe`
	border: 0;
	filter: brightness(0.85) sepia(0.2);
	max-width: 100%;
	scale: 0.99;
	transform: translate(-0.05%, -0.05%);
	transition: all 200ms;

	&:hover {
		filter: brightness(1) sepia(0);
		transform: translate(0, 0);
		scale: 1;
	}
`
