import { createGlobalStyle } from 'styled-components/macro'
import { type ThemeType } from 'styles'
import { FontSize } from 'styles/typography'

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    html,
    body { 
        background-color: ${({ theme }) => theme.global.background.light};
        color: ${({ theme }) => theme.global.content.body};
        font-size: 18px;
    }

    h1 {
        color: ${({ theme }) => theme.global.content.headings.h1};
        font-size: ${FontSize.heading1};
    }

    p {
        color: ${({ theme }) => theme.global.content.body};
        font-size: ${FontSize.base};
    }
`
