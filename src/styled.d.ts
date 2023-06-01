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
		homepage: {
			intro: {
				downArrow: {
					default: Color
					hover: Color
					active: Color
				}
			}
		}
		footer: {
			background: Color
		}
		menu: {
			title: {
				text: {
					default: Color
					sticky: Color
				}
				background: {
					default: Color
					sticky: Color
				}
			}
			shadedRow: Color
			divider: Color
		}
		nav: {
			mobile: {
				toggle: {
					background: Color
					text: Color
				}
				list: {
					background: Color
					text: {
						default: Color
						hover: Color
					}
					link: {
						default: {
							text: Color
						}
						hover: {
							background: Color
						}
					}
				}
			}
		}
	}
}
