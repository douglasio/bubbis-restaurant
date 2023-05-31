import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Footer, Header } from 'components'
import { theme, GlobalStyle } from 'styles'
import * as Styled from './Layout.styles'

type LayoutProps = {
	children: React.ReactNode
	theme: keyof typeof theme
}

export const Layout: React.FC<LayoutProps> = (props) => {
	const data = useStaticQuery(graphql`
		query LayoutQuery {
			contentfulGlobal {
				name
				description {
					description
				}
				phone
				facebook
				instagram
			}
		}
	`)

	const {
		name,
		description: { description },
		phone,
		facebook,
		instagram,
	} = data.contentfulGlobal

	return (
		<ThemeProvider theme={theme[props.theme]}>
			<GlobalStyle theme={theme[props.theme]} />
			<Header name={name} description={description} />
			{props.children}
			<Footer
				name={name}
				phone={phone}
				facebook={facebook}
				instagram={instagram}
			/>
		</ThemeProvider>
	)
}
