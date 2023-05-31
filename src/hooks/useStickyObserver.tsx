import React, { RefObject, useEffect, useState } from 'react'

export const useStickyObserver = (sentinelRef: RefObject<HTMLDivElement>) => {
	const [isSticky, setIsSticky] = useState<boolean>(false)

	useEffect(() => {
		const header = sentinelRef?.current
		const observer = new IntersectionObserver(
			([e]) => {
				// e is our target element -- the header;
				// other properties available include:
				//   boundingClientRect
				//   intersectionRatio
				//   intersectionRect
				//   rootBounds
				//   target
				//   time
				setIsSticky(!e.isIntersecting) // isSticky should be true when item should be stuck to top
				// setIsSticky(e.intersectionRatio > 1)
			},
			{ threshold: [0] }
		)

		if (header) {
			observer.observe(header)
		}

		// clean up the observer
		return () => {
			header && observer.unobserve(header)
		}
	}, [sentinelRef])

	return { isSticky } as const
}
