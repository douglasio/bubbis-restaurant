import React, { useRef } from 'react'
import { useStickyObserver } from 'hooks'
import { JumpTo } from 'components'
import * as Styled from './Header.styles'
import { ContentfulGlobal } from 'contentful.types'

type HeaderProps = {
	name: ContentfulGlobal['name']
	description: ContentfulGlobal['description']
}

export const Header = ({ name, description }: HeaderProps) => {
	const sentinelRef = useRef<HTMLDivElement>(null)
	const { isSticky } = useStickyObserver(sentinelRef, [0])

	return (
		<>
			<Styled.Header $isSticky={isSticky}>
				<h1 className="grid-area-1">
					<a className="plain" href="#top" target="_self">
						{name}
					</a>
				</h1>
				<p className="grid-area-3">{description.toString()}</p>
				{/* <JumpTo className="grid-area-2" /> */}
			</Styled.Header>
			<div id="stickySentinel" ref={sentinelRef}></div>
		</>
	)
}
