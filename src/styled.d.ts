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
			}
		}
		homepage: {
			intro: {
				downArrow: {
					default: Color
					hover: Color
					active: Color
				}
				box: {
					default: {
						background: Color
					}
					featured: {
						background: Color
					}
				}
			}
		}
		footer: {
			background: Color
		}
		map: {
			background: Color
			border: Color
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
			desktop: {
				link: {
					default: Color
					hover: Color
				}
			}
			mobile: {
				backsplash: Color

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
				shade: Color
				toggle: {
					background: Color
					text: Color
				}
			}
		}
		businessHours: {
			text: Color
		}
	}
}
