export function shuffleNumbers(min: number, max: number) {
	const lsKey = 'heroImage'
	const previousNumber = Number(localStorage.getItem)
	let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

	if (randomNumber >= previousNumber) {
		if (randomNumber + 1 === max) {
			randomNumber--
		} else {
			randomNumber++
		}
	}

	localStorage.setItem(lsKey, `${randomNumber}`)

	return randomNumber
}
