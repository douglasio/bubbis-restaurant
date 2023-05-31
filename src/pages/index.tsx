import React from 'react'
import { graphql, HeadFC, type HeadProps } from 'gatsby'
import { Menu, Layout } from 'components'
import type { AllContentfulMenu } from 'components/Menu/types'
import * as Styled from './index.styles'

type ContentfulHomepage = {
	heading: string
}

interface IndexPageProps {
	data: {
		contentfulHomepage: ContentfulHomepage
		allContentfulMenu: AllContentfulMenu
	}
}

const IndexPage: React.FC<IndexPageProps> = ({
	data: { contentfulHomepage, allContentfulMenu },
}) => {
	const { heading } = contentfulHomepage
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

export const Head = ({
	data: {
		contentfulHomepage: { heading },
	},
}: HeadProps<IndexPageProps['data']>) => <title>{heading}</title>

export const query = graphql`
	query IndexPage {
		contentfulHomepage {
			heading
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
