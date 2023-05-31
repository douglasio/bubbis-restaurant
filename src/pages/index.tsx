import React from 'react'
import { graphql, HeadFC, type HeadProps, type PageProps } from 'gatsby'
import { Menu, Layout } from 'components'
import type { AllContentfulMenu, ContentfulGlobal } from 'contentful.types'
import * as Styled from './index.styles'

interface IndexPageProps {
	allContentfulMenu: AllContentfulMenu
	contentfulGlobal: ContentfulGlobal
}

const IndexPage = ({ data }: PageProps<IndexPageProps>) => {
	return (
		<Layout theme="light">
			<Styled.IndexPage>
				{data.allContentfulMenu?.nodes.map((menu) => {
					return <Menu key={menu.id} {...menu} />
				})}
			</Styled.IndexPage>
		</Layout>
	)
}

// Must use default export for Gatsby pages
export default IndexPage

export const Head = ({
	data: {
		contentfulGlobal: { name },
	},
}: HeadProps<IndexPageProps>) => <title>{name}</title>

export const query = graphql`
	query IndexPage {
		contentfulGlobal {
			name
		}
		allContentfulMenu(sort: { createdAt: ASC }) {
			nodes {
				title
				slug
				id
				items {
					name
					price
					description {
						description
					}
					id
				}
			}
		}
	}
`
