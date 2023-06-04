import React from 'react'
import styled from 'styled-components'
import { default as MarkdownToJSX } from 'markdown-to-jsx'

const StyledMarkdown = styled(MarkdownToJSX)`
	white-space: pre-wrap;
`

type MarkdownProps = {
	children: string
	href?: string // add link to entire text block
}

export const Markdown = ({ children, href }: MarkdownProps) => {
	return (
		<StyledMarkdown>
			{href ? `[${children}](${href})` : children}
		</StyledMarkdown>
	)
}
