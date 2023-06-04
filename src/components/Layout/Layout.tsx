import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Footer, Header } from 'components'
import { theme, GlobalStyle } from 'styles'
import * as Styled from './Layout.styles'
import { HeaderSize } from 'components/Header/types'

type LayoutProps = {
	children: React.ReactNode
	headerSize?: HeaderSize
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
				email
				facebook
				instagram
			}
		}
	`)

	const {
		name,
		description: { description },
		phone,
		email,
		facebook,
		instagram,
	} = data.contentfulGlobal

	return (
		<ThemeProvider theme={theme[props.theme]}>
			<GlobalStyle theme={theme[props.theme]} />
			<div id="top" />
			<Styled.Wrapper>
				<Header name={name} description={description} size={props.headerSize} />
				<Styled.Main>{props.children}</Styled.Main>
				<Footer
					name={name}
					phone={phone}
					email={email}
					facebook={facebook}
					instagram={instagram}
				/>
			</Styled.Wrapper>
		</ThemeProvider>
	)
}
