export function shuffleNumbers(min: number, max: number) {
	const lsKey = 'heroImage'
	let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

	if (typeof window !== 'undefined') {
		const previousNumber = Number(window.localStorage.getItem)
		if (randomNumber >= previousNumber) {
			if (randomNumber + 1 === max) {
				randomNumber--
			} else {
				randomNumber++
			}
		}

		window.localStorage.setItem(lsKey, `${randomNumber}`)
	}

	return randomNumber
}
