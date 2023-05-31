import styled from 'styled-components'

export const JumpToWrapper = styled.div`
	position: relative;
`

export const Button = styled.button`
	/* position: relative; */
`

export const NavWrapper = styled.div`
	position: absolute;
	top: 3rem;
`

export const Nav = styled.nav<{
	$visible: boolean
}>`
	background-color: ${({ theme }) => theme.header.jumpTo.nav.background};
	opacity: ${({ $visible }) => ($visible ? 1 : 0)};
	position: absolute;
	bottom: -100%;
	right: -100%;
	transition: all ease-in 100ms;
	width: 10rem;

	a {
		display: block;
	}
`
