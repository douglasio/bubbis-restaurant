import React from 'react'
import { graphql, HeadFC, Link, type HeadProps, type PageProps } from 'gatsby'
import { Menu, Layout, JumpTo } from 'components'
import type {
	AllContentfulMenu,
	ContentfulGlobal,
	ContentfulHomepage,
} from 'contentful.types'
import * as Styled from './index.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { SVG } from 'svgs'

interface IndexPageProps {
	allContentfulMenu: AllContentfulMenu
	contentfulGlobal: ContentfulGlobal
	contentfulHomepage: ContentfulHomepage
}

const IndexPage = ({ data }: PageProps<IndexPageProps>) => {
	const {
		contentfulHomepage: {
			heroImage,
			introText: { introText },
		},
		allContentfulMenu: { nodes: menus },
	} = data

	return (
		<Layout theme="light">
			<Styled.Section className="intro">
				<Styled.Intro>
					<div className="intro-text">{introText}</div>
					<nav className="intro-nav">
						<Link className="button" to="location">
							Location &amp; Hours
						</Link>
					</nav>
				</Styled.Intro>
			</Styled.Section>
			<Styled.Section id="menu">
				<h2>
					<SVG.Pomegranate className="section-heading-svg" />
					Menu
				</h2>
				<Menu menus={menus} />
			</Styled.Section>
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
		contentfulHomepage {
			heading
			introText {
				introText
			}
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
					image {
						description
						gatsbyImageData(layout: FIXED, height: 75, width: 100)
					}
					id
				}
			}
		}
	}
`
