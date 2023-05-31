import { ContentfulGlobal } from 'contentful.types'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import * as Styled from './Footer.styles'

type FooterProps = {
	name: ContentfulGlobal['name']
	phone: ContentfulGlobal['phone']
	facebook: ContentfulGlobal['facebook']
	instagram: ContentfulGlobal['instagram']
}

export const Footer = ({ name, phone, facebook, instagram }: FooterProps) => {
	return (
		<Styled.Footer>
			<h3>{name}</h3>
			<p>
				<a className="icon" href={`tel:${phone}`}>
					<FontAwesomeIcon icon={faPhone} />
				</a>
				<a href={`tel:${phone}`}>{phone}</a>
			</p>
			<p>
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
			</p>
			<p>
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
			</p>
		</Styled.Footer>
	)
}
