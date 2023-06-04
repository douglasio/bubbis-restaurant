import React from 'react'
import { graphql, HeadProps, PageProps } from 'gatsby'
import { BusinessHours, Layout, Map, Markdown } from 'components'
import { ContentfulGlobal } from 'contentful.types'
import * as Styled from './index.styles'

interface LocationPageProps {
	contentfulGlobal: ContentfulGlobal
}

const LocationPage = ({ data }: PageProps<LocationPageProps>) => {
	const {
		contentfulGlobal: {
			addressText: { addressText },
			hours: { hours },
		},
	} = data

	return (
		<Layout headerSize="sticky" theme="light">
			<Styled.Section>
				<h1>Location &amp; Hours</h1>
			</Styled.Section>
			<Styled.Section>
				<Styled.Subsection>
					<h2>Hours</h2>
					<Markdown>{hours}</Markdown>
					<BusinessHours showIfClosed={true} />
				</Styled.Subsection>
				<Styled.Subsection>
					<h2>Location</h2>
					<Markdown>{addressText}</Markdown>
					<Map />
				</Styled.Subsection>
			</Styled.Section>
		</Layout>
	)
}

export default LocationPage

export const Head = ({}: HeadProps) => <title>Location &amp; Hours</title>

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
	}
`
