export enum FontFamily {
	playfair = 'Playfair Display SC, serif',
	ysabeau = 'Ysabeau, sans-serif',
}

export enum FontSize {
	base = '1rem', // 18px (global.tsx)

	//modifiers
	smallest = '0.5rem',
	smaller = '0.7rem',
	small = '0.9rem',
	medium = '1.1rem',
	large = '1.5rem',
	larger = '1.75rem',
	largest = '3rem',

	// headings
	heading1 = '2.5rem',
	heading2 = '2.25rem',
	heading3 = '1.5rem',

	//hero
	hero1 = 'calc(1rem + 6vw)',
	hero2 = 'calc(1rem + 1vw)',
	hero3 = '1.5rem',
}

export enum FontWeight {
	light = '200',
	regular = '400',
	medium = '500',
	semibold = '600',
	bold = '700',
	black = '900',
}
