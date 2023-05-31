import styled from 'styled-components/macro'
import { FontSize, FontFamily, FontWeight } from 'styles'

const getTransition = (property: string) => `${property} ease-in 200ms`

export const headerHeight = '3.5rem'

export const Header = styled.header<{ $isSticky?: boolean }>`
	background-color: ${({ $isSticky, theme }) =>
		$isSticky
			? theme.header.background.sticky
			: theme.header.background.default};
	box-sizing: border-box;
	height: ${({ $isSticky }) => ($isSticky ? headerHeight : 'auto')};
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
`

export const Footer = styled.footer`
	background-color: ${({ theme }) => theme.global.background.dark};
	padding: 1rem;

	.icon {
		margin-right: 0.5rem;
	}
`
