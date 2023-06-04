import React, { ReactNode } from 'react'
import styled from 'styled-components'

type BoxProps = {
	children: ReactNode
	className?: string
	style?: object
}

const StyledBox = styled.div`
	align-content: center;
	background-color: ${({ theme }) => theme.box.background};
	display: inline-grid;
	padding: 1rem;
`

export const Box = ({ children, className }: BoxProps) => {
	return <StyledBox className={className}>{children}</StyledBox>
}
