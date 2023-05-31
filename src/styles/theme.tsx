import { type DefaultTheme } from 'styled-components'
import { Color } from './colors'

const defaultTheme: DefaultTheme = {
	id: 1,
	name: 'light',
	global: {
		background: {
			light: Color.milano,
			dark: Color.faluRed,
		},
		content: {
			headings: {
				h1: Color.white,
			},
			button: {
				background: {
					default: Color.persianOrange,
					hover: Color.white,
					active: Color.white,
				},
				text: {
					default: Color.white,
					hover: Color.white,
					active: Color.white,
				},
			},
			body: Color.white,
			link: {
				default: Color.persianOrange,
				hover: Color.white,
			},
		},
	},
	header: {
		background: {
			default: Color.milano,
			sticky: Color.faluRed,
		},
		jumpTo: {
			button: {
				background: {
					default: Color.persianOrange,
					hover: Color.white,
					active: Color.white,
				},
				text: {
					default: Color.white,
					hover: Color.white,
					active: Color.white,
				},
			},
			nav: {
				background: Color.faluRed,
				link: {
					default: Color.white,
					hover: Color.white,
				},
			},
		},
	},
	footer: {
		background: Color.faluRed,
	},
}

export const theme = {
	light: {
		...defaultTheme,
	},
	dark: {
		...defaultTheme,
		id: 2,
	},
}

export type ThemeType = typeof defaultTheme
