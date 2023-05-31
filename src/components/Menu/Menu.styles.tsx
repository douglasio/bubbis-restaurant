import { headerHeight } from 'components/Layout/Layout.styles'
import styled from 'styled-components/macro'
import { FontSize, FontWeight } from 'styles'

export const Menu = styled.section`
	margin: 0 1rem;
`

export const Title = styled.h2`
	background-color: ${({ theme }) => theme.global.background.light};
	border-bottom: 1px solid white;
	padding-bottom: 0.5rem;
	position: sticky;
	top: ${headerHeight};
`

export const MenuItem = styled.li`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, auto);
	grid-gap: 0.25rem 0.5rem;
	margin: 2rem 0;
`

const menuItemChildrenStyles = `
    display: block;
`

export const MenuItemName = styled.span`
	${menuItemChildrenStyles}
	font-size: ${FontSize.medium};
	font-weight: ${FontWeight.bold};
	grid-area: 1 / 1 / 2 / 2;
`
export const MenuItemPrice = styled.span`
	font-size: ${FontSize.medium};
	font-weight: ${FontWeight.black};
	grid-area: 1 / 2 / 2 / 3;
`
export const MenuItemDescription = styled.span`
	grid-area: 2 / 1 / 3 / 2;
`
