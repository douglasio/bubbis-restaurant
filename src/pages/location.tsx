import { Layout } from 'components'
import { BusinessHours } from 'components/BusinessHours'
import { HeadProps } from 'gatsby'
import React from 'react'

const LocationPage = () => {
	return (
		<Layout headerSize="sticky" theme="light">
			<h1>Location and hours page!</h1>
			<BusinessHours />
		</Layout>
	)
}

export default LocationPage

export const Head = ({}: HeadProps) => <title>Location &amp; Hours</title>
