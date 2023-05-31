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
			body: Color.white,
			link: Color.persianOrange,
		},
	},
	header: {
		background: {
			default: Color.milano,
			sticky: Color.faluRed,
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
