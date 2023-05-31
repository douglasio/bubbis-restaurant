import React from 'react'
import { graphql } from 'gatsby'
import type { HeadFC, PageProps } from 'gatsby'
import { Layout } from 'components'
import * as Styled from './index.styles'

const IndexPage = ({
	data: {
		allContentfulHomepage: { nodes },
	},
}: PageProps<Queries.Query>) => {
	const [homepageData] = nodes

	return (
		<Layout theme="light">
			<Styled.IndexPage>
				<h1>{homepageData.heading}</h1>
			</Styled.IndexPage>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query IndexPage {
		allContentfulHomepage {
			nodes {
				heading
			}
		}
	}
`

export const Head: HeadFC = () => <title>Home Page</title>
