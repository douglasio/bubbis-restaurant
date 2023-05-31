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
				button: {
					background: {
						default: Color
						hover: Color
						active: Color
					}
					text: {
						default: Color
						hover: Color
						active: Color
					}
				}
				link: {
					default: Color
					hover: Color
				}
			}
		}
		header: {
			background: {
				default: Color
				sticky: Color
			}
			jumpTo: {
				button: {
					background: {
						default: Color
						hover: Color
						active: Color
					}
					text: {
						default: Color
						hover: Color
						active: Color
					}
				}
				nav: {
					background: Color
					link: {
						default: Color
						hover: Color
					}
				}
			}
		}
		footer: {
			background: Color
		}
	}
}
