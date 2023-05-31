import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles'
import { GlobalStyle } from 'styles'

type LayoutProps = {
	children: React.ReactNode
	theme: keyof typeof theme
}

export const Layout: React.FC<LayoutProps> = (props) => {
	return (
		<ThemeProvider theme={theme[props.theme]}>
			<GlobalStyle theme={theme[props.theme]} />
			{props.children}
		</ThemeProvider>
	)
}
