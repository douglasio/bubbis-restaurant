import { Color } from './colors'

const defaultTheme = {
	id: 1,
	name: 'light',
	global: {
		background: {
			light: Color.milano,
			dark: Color.black,
		},
		content: {
			headings: {
				h1: Color.white,
			},
			body: Color.white,
		},
	},
}

export const theme = {
	light: {
		...defaultTheme,
	},
	dark: {
		...defaultTheme,
	},
}

export type ThemeType = typeof defaultTheme
