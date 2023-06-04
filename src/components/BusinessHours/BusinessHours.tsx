import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useWorldTime } from 'hooks'
import { ContentfulGlobal } from 'contentful.types'
import { WEEKDAY } from 'utils'
import * as Styled from './BusinessHours.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorClosed, faDoorOpen } from '@fortawesome/free-solid-svg-icons'

export function areWeOpen(
	schedule: ContentfulGlobal['hoursObject'],
	localTime: Date
): boolean | null {
	const localDay: number = localTime.getDay(),
		localHour: number = localTime.getHours(),
		localWeekday = WEEKDAY[localDay]
	let isOpen = false

	const dailyHours = schedule.hours.find(({ day }) => day === localWeekday)

	if (dailyHours !== undefined) {
		const { day, startHour, endHour } = dailyHours
		isOpen = dailyHours && localHour > startHour && localHour < endHour

		console.info(
			`Restaurant is ${
				isOpen ? 'open' : 'closed'
			} because the local time is ${localHour}h on ${localWeekday}, and business hours are ${startHour}h-${endHour}h on ${day}`
		)
	}

	return isOpen
}

type BusinessHoursProps = {
	showIfClosed?: boolean
}

export const BusinessHours = ({ showIfClosed }: BusinessHoursProps) => {
	const query = useStaticQuery(graphql`
		query businessHours {
			contentfulGlobal {
				hoursObject {
					hours {
						day
						endHour
						startHour
					}
				}
			}
		}
	`)
	const { localTime, loading } = useWorldTime()
	const { hoursObject } = query.contentfulGlobal
	let open

	if (!loading && !!localTime) {
		open = areWeOpen(hoursObject, localTime as Date)
	}

	return open ? (
		<Styled.BusinessHours>
			We&rsquo;re open! <FontAwesomeIcon icon={faDoorOpen} />
		</Styled.BusinessHours>
	) : showIfClosed ? (
		<Styled.BusinessHours>
			We&rsquo;re closed <FontAwesomeIcon icon={faDoorClosed} />
		</Styled.BusinessHours>
	) : (
		<></>
	)
}
