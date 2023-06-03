import React from 'react'
import styled from 'styled-components'
import { default as MarkdownToJSX } from 'markdown-to-jsx'

const StyledMarkdown = styled(MarkdownToJSX)`
	white-space: pre-wrap;
`

type MarkdownProps = {
	children: string
}

export const Markdown = ({ children }: MarkdownProps) => {
	return <StyledMarkdown>{children}</StyledMarkdown>
}
