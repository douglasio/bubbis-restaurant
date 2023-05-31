import React from 'react'
import { graphql } from 'gatsby'
import { Menu, Layout } from 'components'
import type { AllContentfulMenu } from 'components/Menu/types'
import * as Styled from './index.styles'

type AllContentfulHomepage = {
	nodes: {
		heading: string
	}
}

interface IndexPageProps {
	data: {
		allContentfulHomepage: AllContentfulHomepage
		allContentfulMenu: AllContentfulMenu
	}
}

const IndexPage: React.FC<IndexPageProps> = ({
	data: { allContentfulHomepage, allContentfulMenu },
}) => {
	const {
		nodes: { heading },
	} = allContentfulHomepage
	const { nodes: menus } = allContentfulMenu

	return (
		<Layout theme="light">
			<Styled.IndexPage>
				<h1>{heading}</h1>
				{menus.map((menu) => {
					console.log(menu)
					return (
						<Menu key={menu.id} {...menu}>
							stuff inside menu
						</Menu>
					)
				})}
			</Styled.IndexPage>
		</Layout>
	)
}

// Must use default export for Gatsby pages
export default IndexPage

export const query = graphql`
	query IndexPage {
		allContentfulHomepage {
			nodes {
				heading
			}
		}
		allContentfulMenu {
			nodes {
				title
				slug
				id
				items {
					name
					price
				}
			}
		}
	}
`
