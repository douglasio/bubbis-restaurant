import 'styled-components'
import type { Color } from 'styles'

declare module 'styled-components' {
	export interface DefaultTheme {
		id: number
		name: string
		global: {
			background: {
				light: Color
				dark: Color
			}
			content: {
				headings: {
					h1: Color
				}
				body: Color
				link: Color
			}
		}
		header: {
			background: { default: Color; sticky: Color }
		}
		footer: {
			background: Color
		}
	}
}
