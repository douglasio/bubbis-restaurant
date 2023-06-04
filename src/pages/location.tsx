import React from 'react'
import { graphql, HeadProps, PageProps } from 'gatsby'
import { Box, BusinessHours, Layout, Map, Markdown } from 'components'
import { ContentfulGlobal, ContentfulLocationPage } from 'contentful.types'
import * as Styled from './index.styles'
import { GatsbyImage } from 'gatsby-plugin-image'

interface LocationPageProps {
	contentfulGlobal: ContentfulGlobal
	contentfulLocationPage: ContentfulLocationPage
}

const LocationPage = ({ data }: PageProps<LocationPageProps>) => {
	const {
		contentfulGlobal: {
			addressText: { addressText },
			hours: { hours },
		},
		contentfulLocationPage: { title, images },
	} = data

	return (
		<Layout headerSize="sticky" theme="light">
			<Styled.Section>
				<h1>Location &amp; Hours</h1>
			</Styled.Section>
			<Styled.Section>
				<Styled.SubsectionGrid>
					<div>
						<Styled.Subsection>
							<h2>Hours</h2>
							<Markdown>{hours}</Markdown>
							<BusinessHours showIfClosed={true} />
						</Styled.Subsection>
						<Styled.Subsection>
							<h2>Location</h2>
							<Markdown>{addressText}</Markdown>
							<Box>
								<Map />
							</Box>
						</Styled.Subsection>
					</div>
					<div>
						<Styled.Subsection>
							<Styled.ImageGrid>
								{images.map(({ description, gatsbyImageData }) => (
									<Box>
										<GatsbyImage alt={description} image={gatsbyImageData} />
									</Box>
								))}
							</Styled.ImageGrid>
						</Styled.Subsection>
					</div>
				</Styled.SubsectionGrid>
			</Styled.Section>
		</Layout>
	)
}

export default LocationPage

export const Head = ({
	data: {
		contentfulGlobal: { name },
		contentfulLocationPage: { title },
	},
}: HeadProps<LocationPageProps>) => (
	<title>
		{name} {title}
	</title>
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
		contentfulLocationPage {
			title
			images {
				gatsbyImageData(placeholder: BLURRED)
			}
		}
	}
`
