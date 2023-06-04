import { createGlobalStyle } from 'styled-components/macro'
import { type ThemeType } from 'styles'
import { FontFamily, FontSize, FontWeight } from 'styles/typography'
import Playfair from 'styles/fonts/playfair/PlayfairDisplaySC-Regular.ttf'
import YsabeauRegular from 'styles/fonts/ysabeau/Ysabeau-Regular.ttf'
import YsabeauThin from 'styles/fonts/ysabeau/Ysabeau-Thin.ttf'
import YsabeauSemiBold from 'styles/fonts/ysabeau/Ysabeau-SemiBold.ttf'
import YsabeauBold from 'styles/fonts/ysabeau/Ysabeau-Bold.ttf'
import YsabeauBlack from 'styles/fonts/ysabeau/Ysabeau-Black.ttf'

// get prettier to format createGlobalStyle tag
const styled = {
	createGlobalStyle: createGlobalStyle,
}

export const GlobalStyle = styled.createGlobalStyle<{ theme: ThemeType }>`
	@font-face {
		font-family: 'Playfair Display SC';
		src: url(${Playfair});
	}

	@font-face {
		font-family: 'Ysabeau';
		src: url(${YsabeauRegular});
		font-weight: ${FontWeight.regular};
	}

	@font-face {
		font-family: 'Ysabeau';
		src: url(${YsabeauThin});
		font-weight: ${FontWeight.light};
	}

	@font-face {
		font-family: 'Ysabeau';
		src: url(${YsabeauSemiBold});
		font-weight: ${FontWeight.semibold};
	}

	@font-face {
		font-family: 'Ysabeau';
		src: url(${YsabeauBold});
		font-weight: ${FontWeight.bold};
	}

	@font-face {
		font-family: 'Ysabeau';
		src: url(${YsabeauBlack});
		font-weight: ${FontWeight.black};
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html,
	body {
		background-color: ${({ theme }) => theme.global.background.light};
		color: ${({ theme }) => theme.global.content.body};
		font-family: ${FontFamily.ysabeau};
		font-size: 18px;
		scroll-behavior: smooth;
		scroll-padding: 3.5rem;
	}

	h1 {
		color: ${({ theme }) => theme.global.content.headings.h1};
		font-family: ${FontFamily.playfair};
		font-size: ${FontSize.heading1};
	}

	h2 {
		font-family: ${FontFamily.playfair};
		font-size: ${FontSize.heading2};
		font-weight: ${FontWeight.bold};
	}

	h3 {
		font-size: ${FontSize.heading3};
		font-weight: ${FontWeight.semibold};
	}

	p {
		color: ${({ theme }) => theme.global.content.body};
		font-size: ${FontSize.base};
	}

	a:not(.plain) {
		color: ${({ theme }) => theme.global.content.link.default};
		text-decoration: none;

		&:hover {
			color: ${({ theme }) => theme.global.content.link.hover};
			text-decoration: underline;
		}
	}

	button:not(.plain),
	.button {
		border: 0;
		background-color: ${({ theme }) =>
		theme.global.content.button.background.default};
		color: ${({ theme }) => theme.global.content.button.text.default};
		padding: 0.5em 1em;

		&:hover {
			background-color: ${({ theme }) =>
		theme.global.content.button.background.hover};
			color: ${({ theme }) => theme.global.content.button.text.hover};
			cursor: pointer;
		}
	}

	.wordmark {
		font-family: ${FontFamily.playfair};
	}
`
