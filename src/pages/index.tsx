import React from 'react'
import { graphql, HeadFC, type HeadProps, type PageProps } from 'gatsby'
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

interface IndexPageProps {
	allContentfulMenu: AllContentfulMenu
	contentfulGlobal: ContentfulGlobal
	contentfulHomepage: ContentfulHomepage
}

const IndexPage = ({ data }: PageProps<IndexPageProps>) => {
	const menus = data.allContentfulMenu.nodes
	const heroImage = data.contentfulHomepage.heroImage

	console.log(heroImage)

	return (
		<Layout theme="light">
			<Styled.IndexPage>
				<Styled.Section className="intro">
					{heroImage && (
						<Styled.HeroImage
							alt={heroImage.description}
							draggable={false}
							image={getImage(heroImage)!}
						/>
					)}
					<Styled.Intro>
						<h2>Food be yum</h2>
						<nav>
							<a href="#menu">Menu</a>
							<a href="#menu">Location</a>
							<a href="#menu">Hours</a>
							<a href="#menu">Contact</a>
						</nav>
					</Styled.Intro>
					<Styled.DownArrow className="plain" href="#menu" target="_self">
						<FontAwesomeIcon icon={faAngleDown} />
					</Styled.DownArrow>
				</Styled.Section>
				<Styled.Section id="menu">
					<h2>Menu</h2>
					{menus.map((menu) => {
						return <Menu key={menu.id} {...menu} />
					})}
				</Styled.Section>
				<Styled.Section>
					<h2></h2>
				</Styled.Section>
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
		contentfulHomepage {
			heroImage {
				description
				gatsbyImageData(
					layout: FULL_WIDTH
					placeholder: BLURRED
					resizingBehavior: FILL
				)
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
