import styled from 'styled-components'
import { Color, FontFamily, FontSize, FontWeight } from 'styles'

export const BusinessHours = styled.div`
	color: ${({ theme }) => theme.businessHours.text};
	font-family: ${FontFamily.ysabeau};
	font-size: ${FontSize.base};
	font-weight: ${FontWeight.regular};
	margin: 0.5rem 0 0;
`
