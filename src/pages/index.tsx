import React from 'react'
import { graphql, Link, type HeadProps, type PageProps } from 'gatsby'

import { BusinessHours, Markdown, Menu, Layout } from 'components'
import type {
	AllContentfulMenu,
	ContentfulGlobal,
	ContentfulHomepage,
} from 'contentful.types'
import * as Styled from './index.styles'
import { GOOGLE_MAPS_LINKS } from 'utils'

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
				<h1>Restaurant</h1>
				<Styled.DesktopIntro>
					<div className="intro-box intro-box--feature">
						<Markdown>{introText}</Markdown>
					</div>

					<div className="intro-box">
						<Markdown href={GOOGLE_MAPS_LINKS.map}>{addressText}</Markdown>
						{/* <p>
							<a href={GOOGLE_MAPS_LINKS.directions}>Get directions</a>
						</p> */}
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
				<h2>Menu</h2>
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
		contentfulHomepage: {
			introText: { introText },
		},
	},
}: HeadProps<IndexPageProps>) => (
	<>
		<title>{name}</title>
		<meta name="description" content={introText} />
	</>
)

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
