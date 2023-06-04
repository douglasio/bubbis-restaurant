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
					default: Color.guardsman,
					hover: Color.cinnabar,
					active: Color.cinnabar,
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
			default: Color.pomegranate,
			sticky: Color.pomegranate,
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
		},
	},
	homepage: {
		intro: {
			downArrow: {
				default: Color.white,
				hover: Color.yolk,
				active: Color.yolk,
			},
			box: {
				default: {
					background: Color.guardsman,
				},
				featured: {
					background: Color.transparent,
				},
			},
		},
	},
	footer: {
		background: Color.faluRed,
	},
	map: {
		background: Color.guardsman,
		border: Color.white,
	},
	menu: {
		title: {
			text: {
				default: Color.chewingGum,
				sticky: Color.white,
			},
			background: {
				default: Color.transparent,
				sticky: Color.pomegranate,
			},
		},
		shadedRow: Color.guardsman,
		divider: Color.sunset,
	},
	nav: {
		desktop: {
			link: {
				default: Color.white,
				hover: Color.white,
			},
		},
		mobile: {
			backsplash: Color.bulgarianRose,
			list: {
				background: Color.pomegranate,
				text: {
					default: Color.white,
					hover: Color.persianOrange,
				},
				link: {
					default: {
						text: Color.white,
					},
					hover: {
						background: Color.guardsman,
					},
				},
			},
			shade: Color.black,
			toggle: {
				background: Color.transparent,
				text: Color.white,
			},
		},
	},
	businessHours: {
		text: Color.chewingGum,
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
