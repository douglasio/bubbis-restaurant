import { useEffect, useState } from 'react'
import { WORLD_TIME_API_PST } from 'utils'

type WorldTimeData = { datetime: string } | null

export type UseWorldTimeHook = {
	localTime: string | Date | undefined
	loading: boolean
}

export const useWorldTime = (): UseWorldTimeHook => {
	const [loading, setLoading] = useState(false)
	const [worldTimeData, setWorldTimeData] = useState<WorldTimeData>(null)
	async function getWorldTime() {
		setLoading(true)

		try {
			const response = await fetch(WORLD_TIME_API_PST)
			const data = await response.json()
			setWorldTimeData(data)
		} catch (error) {
			throw new Error('Error fetching worldtime data')
		}

		setLoading(false)
	}

	useEffect(() => {
		getWorldTime()
	}, [])

	const localTime = worldTimeData?.datetime && new Date(worldTimeData.datetime)

	return { localTime: localTime, loading: loading }
}
