import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { GOOGLE_MAPS_LINKS } from 'utils'
import * as Styled from './Map.styles'

export const Map = () => {
	return (
		<Styled.Wrapper>
			<Styled.Map
				src={GOOGLE_MAPS_LINKS.embeddedMap}
				width="400"
				height="200"
			/>
			<figcaption>
				<a
					href={GOOGLE_MAPS_LINKS.directions}
					rel="noopener noreferrer"
					target="_blank"
				>
					Get directions
					<FontAwesomeIcon icon={faCaretRight} />
				</a>
			</figcaption>
		</Styled.Wrapper>
	)
}
