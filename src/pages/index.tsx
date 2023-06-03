import React from 'react'
import { graphql, Link, type HeadProps, type PageProps } from 'gatsby'

import { Markdown, Menu, Layout } from 'components'
import type {
	AllContentfulMenu,
	ContentfulGlobal,
	ContentfulHomepage,
} from 'contentful.types'
import * as Styled from './index.styles'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { SVG } from 'svgs'
import { areWeOpen } from 'utils'
import { BusinessHours } from 'components/BusinessHours'

interface IndexPageProps {
	allContentfulMenu: AllContentfulMenu
	contentfulGlobal: ContentfulGlobal
	contentfulHomepage: ContentfulHomepage
}

const IndexPage = ({ data }: PageProps<IndexPageProps>) => {
	const {
		contentfulGlobal: {
			addressText: { addressText },
			hours: { hours },
			hoursObject,
		},
		contentfulHomepage: {
			introText: { introText },
		},
		allContentfulMenu: { nodes: menus },
	} = data

	return (
		<Layout theme="light">
			<Styled.Section className="intro">
				<Styled.DesktopIntro>
					<div className="intro-box intro-box--feature">
						<Markdown>{introText}</Markdown>
					</div>

					<div className="intro-box">
						<Markdown>{addressText}</Markdown>
					</div>

					<div className="intro-box">
						<Markdown>{hours}</Markdown>
						<BusinessHours />
					</div>
				</Styled.DesktopIntro>
				<Styled.MobileIntro>
					<Link className="button" to="location">
						Location &amp; Hours
						<BusinessHours />
					</Link>
				</Styled.MobileIntro>
			</Styled.Section>
			<Styled.Section id="menu">
				<h2>
					{/* <SVG.Pomegranate className="section-heading-svg" /> */}
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
			addressText {
				addressText
			}
			hours {
				hours
			}
			hoursObject {
				hours {
					day
					endHour
					startHour
				}
			}
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
