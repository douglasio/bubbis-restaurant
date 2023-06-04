import { ContentfulGlobal } from 'contentful.types'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import * as Styled from './Footer.styles'
import { Box } from 'components/Box'

type FooterProps = {
	name: ContentfulGlobal['name']
	phone: ContentfulGlobal['phone']
	email: ContentfulGlobal['email']
	facebook: ContentfulGlobal['facebook']
	instagram: ContentfulGlobal['instagram']
}

export const Footer = ({
	name,
	phone,
	email,
	facebook,
	instagram,
}: FooterProps) => {
	return (
		<Styled.Footer>
			<h3>{name}</h3>
			<Styled.FooterGrid>
				<div>
					<ul>
						<li>
							<a className="icon" href={`tel:${phone}`}>
								<FontAwesomeIcon icon={faPhone} />
							</a>
							<a href={`tel:${phone}`}>{phone}</a>
						</li>
						<li>
							<a className="icon" href={`mailto:${email}`}>
								<FontAwesomeIcon icon={faEnvelope} />
							</a>
							<a href={`mailto:${email}`}>{email}</a>
						</li>
						<li>
							<a
								className="icon"
								href={facebook}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faFacebook} />
							</a>
							<a href={facebook} target="_blank" rel="noopener noreferrer">
								Facebook
							</a>
						</li>
						<li>
							<a
								className="icon"
								href={instagram}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
							<a href={instagram} target="_blank" rel="noopener noreferrer">
								Instagram
							</a>
						</li>
					</ul>
				</div>
				<Box>
					<a href={`tel:${phone}`}>Call for reservations!</a>
				</Box>
			</Styled.FooterGrid>
		</Styled.Footer>
	)
}
